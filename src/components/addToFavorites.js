import { useAddFavoriteMovieMutation, useRemoveFavoriteMovieMutation } from '../store/apis/favoritesMoviesApi';
import React from 'react';

function useAddToFavorites() {
  const [addFavoriteMovie] = useAddFavoriteMovieMutation();
  const [removeFavoriteMovie] = useRemoveFavoriteMovieMutation();
  const [error, setError] = React.useState(null);

  const addToFavorites = async (movie) => {
    try {
      // Call the mutation to add the movie to favorites
      await addFavoriteMovie(movie);
      // If successful, no need to update state as the UI is automatically updated
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
      setError(error.message || 'An error occurred while adding the movie to favorites.');
    }
  };

  const removeFromFavorites = async (movieId) => {
    try {
      // Call the mutation to remove the movie from favorites
      await removeFavoriteMovie(movieId);
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
      setError(error.message || 'An error occurred while removing the movie from favorites.');
    }
  };

  return [addToFavorites, removeFromFavorites, { error }];
}

export default useAddToFavorites;
