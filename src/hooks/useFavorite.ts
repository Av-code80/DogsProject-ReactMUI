import { useLocalStorage } from "./useLocalStorage";

export function useFavorite() {
  const [favorites, setFavorites] = useLocalStorage<string[]>(
    "favoriteDogs",
    []
  );
  const addToFavorite = (breed: string) =>
    !favorites.includes(breed) && setFavorites([...favorites, breed]);

  const removeFavorite = (breed: string) =>
    setFavorites(favorites.filter((d) => d !== breed));

  return [favorites, addToFavorite, removeFavorite] as const;
}
