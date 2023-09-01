import getData from "./service";

interface DogData {
  message: string[];
  status: string;
}

export const fetchDogs = (breed: string, count: number): Promise<DogData> =>
  getData(`/breed/${breed}/images/random/${count}`);

export async function fetchBreeds(): Promise<string[]> {
  const result = await getData(`/breeds/list/all`);
  if (result.message) {
    const allBreeds = Object.keys(result.message);
    return allBreeds;
  }
  return [];
}
