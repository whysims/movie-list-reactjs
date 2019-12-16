import { TMDB_API_URL, API_KEY } from "../common/consts";

export const getPopularMovies = async () => {
  return await fetch(
    `${TMDB_API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.error(e));
};

export const getMovieDetails = async id => {
  return await fetch(`${TMDB_API_URL}movie/${id}?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(res => res)
    .catch(e => e);
};

export const searchMovies = async query => {
  return await fetch(
    `${TMDB_API_URL}search/movie?api_key=${API_KEY}&query=${query}`
  )
    .then(res => res.json())
    .then(res => res)
    .catch(e => e);
};
