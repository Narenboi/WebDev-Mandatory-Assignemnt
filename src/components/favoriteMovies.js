import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchFavoritesMoviesQuery } from '../store/apis/favoritesMoviesApi';

function FavoriteMovies() {
  const { data: favoriteMovies, error, isLoading, refetch } = useFetchFavoritesMoviesQuery();

  useEffect(() => {
    refetch(); // Fetch favorite movies data when the component is rendered
  }, [refetch]);

  // Render loading state, error state, or favorite movies list based on the fetch status
  // (omitted for brevity)

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="row">
        {favoriteMovies && favoriteMovies.map(movie => (
          <div key={movie.id} className="col-lg-2 mb-4">
            {/* Render each favorite movie */}
            {/* (omitted for brevity) */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
