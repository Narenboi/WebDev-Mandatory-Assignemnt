import React, { useEffect } from 'react';
import { useFetchFavoritesMoviesQuery } from '../store/apis/favoritesMoviesApi';
import MovieCard from './movieCard';

function FavoriteMovies() {
  const { data: favoriteMovies, error, isLoading, refetch } = useFetchFavoritesMoviesQuery();
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">My Favorite Movies</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="row">
        {favoriteMovies && favoriteMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
