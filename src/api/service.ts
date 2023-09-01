import NetworkError from "./NetworkError";

const ENDPOINT = "https://dog.ceo/api";

/**
 * @param {Params} params
 * @param {RequestInit} fetchOptions
 * @returns Retrieve Data using query params
 */
export default async function getData(
  query: string,
  fetchOptions?: RequestInit
) {
  const result = await fetch(ENDPOINT + query, {
    method: "GET",
    ...fetchOptions
  });

  if (result.ok) return await result.json();

  throw new NetworkError(
    `[GET_API] Failed to fetch requested data!`,
    result.statusText,
    result.status
  );
}
