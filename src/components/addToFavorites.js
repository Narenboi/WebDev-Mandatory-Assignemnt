// addToFavorites.js
import { useAddFavoriteMovieMutation } from '../store/apis/favoritesMoviesApi';
import React from 'react';

function useAddToFavorites() {
  const [addFavoriteMovie, { isLoading }] = useAddFavoriteMovieMutation();
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

  return [addToFavorites, { isLoading, error }];
}

export default useAddToFavorites;
