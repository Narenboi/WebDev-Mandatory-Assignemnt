import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchFavoritesMoviesQuery } from '../store/apis/favoritesMoviesApi';
import MovieCard from './movieCard'; // Assuming MovieCard component is in a file named 'MovieCard.js'

function FavoriteMovies() {
  const { data: favoriteMovies, error, isLoading, refetch } = useFetchFavoritesMoviesQuery();

  useEffect(() => {
    refetch(); // Fetch favorite movies data when the component is rendered
  }, [refetch]);

  console.log('Favorite Movies:', favoriteMovies); // Log the favorite movies data

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className="row">
        {favoriteMovies && favoriteMovies.map(movie => (
          <div key={movie.id} className="col-lg-2 mb-4">
            <MovieCard movie={movie} /> {/* Pass movie data to MovieCard component */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
