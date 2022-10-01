import { API_KEY } from './constents/constant';


export const Original = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const Romantic = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const Documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
export const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
