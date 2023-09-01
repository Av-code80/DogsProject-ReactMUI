import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DogCard, DogList, Dropdown, FavoriteDogsList } from "./components";
import { fetchDogs, fetchBreeds } from "./api";
import { useLocalStorage, useFavorite } from "./hooks";
import "./styles.css";

const DOG_COUNT_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30];
const COLUMNS_OPTIONS = [1, 2, 3, 4, 5, 6];

export default function App() {
  const [breeds, setBreeds] = useLocalStorage<string[]>("breeds", []);
  const [selectedBreed, setSelectedBreed] = useState<string>(breeds[0] ?? "");
  const [count, setCount] = useState<number>(1);
  const [columns, setColumns] = useState<number>(1);
  const [dogs, setDogs] = useState<string[]>([]);
  const [favorites, addToFavorite, removeFavorite] = useFavorite();

  useEffect(() => {
    if (breeds.length === 0)
      fetchBreeds().then((allBreeds) => {
        setBreeds(allBreeds);
        setSelectedBreed(allBreeds[0]);
      });
  });

  useEffect(() => {
    if (selectedBreed && count)
      fetchDogs(selectedBreed, count).then((res) => setDogs(res.message));
  }, [selectedBreed, count]);

  return (
    <main className="App">
      <Container>
        <h1
          style={{
            background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
            color: "white",
            padding: "20px"
          }}
        >
          Choose your dog
        </h1>
        <div className="App_head">
          <div className="App_head_dropdowns">
            <Dropdown
              onChange={(breed: string) => setSelectedBreed(breed)}
              label="Choose a dog"
              values={breeds}
              currentValue={selectedBreed}
            />
            <Dropdown
              onChange={(count: number) => setCount(count)}
              label="How many dogs"
              values={DOG_COUNT_OPTIONS}
              currentValue={count}
            />
            <Dropdown
              onChange={(column: number) => setColumns(column)}
              label="How many columns"
              values={COLUMNS_OPTIONS}
              currentValue={columns}
            />
            <FavoriteDogsList
              favoriteDogs={favorites}
              onDogClick={(dog) => setSelectedBreed(dog)}
              onRemove={removeFavorite}
            />
          </div>
          <DogCard
            url={dogs[0]}
            alt={selectedBreed}
            breed={selectedBreed}
            addToFavorite={addToFavorite}
          />
        </div>

        <DogList itemData={dogs} cols={columns} />
      </Container>
    </main>
  );
}
