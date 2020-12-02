const BASE_URL = 'http://www.omdbapi.com/?apikey=287c70f0';

export async function getMovie(title) {
  const response = await fetch(`${BASE_URL}&t=[${title}]`);
  const result = response.json();

  return result;
}
