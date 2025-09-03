import axios from 'axios';
import type { MovieDetails, SearchMoviesResponse, MovieCredits } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const tmdbService = {
  searchMovies: async (query: string, page: number = 1): Promise<SearchMoviesResponse> => {
    const response = await api.get<SearchMoviesResponse>('/search/movie', {
      params: { query, page },
    });
    return response.data;
  },

  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const response = await api.get<MovieDetails>(`/movie/${movieId}`);
    return response.data;
  },

  getMovieCredits: async (movieId: number): Promise<MovieCredits> => {
    const response = await api.get<MovieCredits>(`/movie/${movieId}/credits`);
    return response.data;
  },

  getPopularMovies: async (page: number = 1): Promise<SearchMoviesResponse> => {
    const response = await api.get<SearchMoviesResponse>('/movie/popular', {
      params: { page },
    });
    return response.data;
  },

  getImageUrl: (path: string | null, size: 'w300' | 'w500' | 'w780' | 'original' = 'w500'): string | null => {
    if (!path) return null;
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },

  getBackdropUrl: (path: string | null, size: 'w780' | 'w1280' | 'original' = 'w1280'): string | null => {
    if (!path) return null;
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },
};