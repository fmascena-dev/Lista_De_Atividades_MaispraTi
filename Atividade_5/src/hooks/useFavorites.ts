import { useState, useEffect } from 'react';
import type { Movie } from '../types/movie';

const FAVORITES_KEY = 'movieApp_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  const saveFavoritesToStorage = (newFavorites: Movie[]) => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  };

  const addToFavorites = (movie: Movie) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === movie.id);
      if (isAlreadyFavorite) return prevFavorites;
      
      const newFavorites = [...prevFavorites, movie];
      saveFavoritesToStorage(newFavorites);
      return newFavorites;
    });
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.filter(fav => fav.id !== movieId);
      saveFavoritesToStorage(newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (movieId: number): boolean => {
    return favorites.some(fav => fav.id === movieId);
  };

  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie.id)) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
    saveFavoritesToStorage([]);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount: favorites.length,
  };
};