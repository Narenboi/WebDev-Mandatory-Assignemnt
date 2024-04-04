// favoriteMovies.js
import React, { useEffect } from 'react';
import { useFetchFavoritesMoviesQuery } from '../store/apis/favoritesMoviesApi';
import MovieCard from './movieCard'; // Import the MovieCard component

function FavoriteMovies() {
  const { data: favoriteMovies, error, isLoading } = useFetchFavoritesMoviesQuery();

  useEffect(() => {
    console.log('Favorite Movies:', favoriteMovies);
    console.log('Error:', error);
    console.log('Loading:', isLoading);
  }, [favoriteMovies, error, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!favoriteMovies || favoriteMovies.length === 0) {
    return <div>No favorite movies found</div>;
  }

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="row">
        {favoriteMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
