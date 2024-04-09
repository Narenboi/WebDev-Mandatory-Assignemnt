import React, { useEffect } from 'react';
import { useFetchFavoritesMoviesQuery, useRemoveFavoriteMovieMutation } from '../store/apis/favoritesMoviesApi';
import { posterBasePath } from './movieCard';

function FavoriteMovies() {
  const { data: favoriteMovies, error, isLoading, refetch } = useFetchFavoritesMoviesQuery();
  const [removeFavoriteMovie] = useRemoveFavoriteMovieMutation();
  
  const handleRemoveFromFavorites = async (movieId) => {
    try {
      // Call the mutation to remove the movie from favorites
      await removeFavoriteMovie(movieId); // Pass movieId directly to the mutation function
      // If successful, refetch the favorites to update the UI
      refetch();
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
      // Handle error
    }
  };

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
          <div key={movie.id} className="col-lg-2 mb-4">
            <div className="card">
              <img src={posterBasePath + movie.poster_path} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"><span>{movie.title.substring(0, 200)}</span></h5>
                {/* Trash icon for removing from favorites */}
                <span className="far fa-trash-alt" aria-hidden="true" onClick={() => handleRemoveFromFavorites(movie.id)}></span>
                <span className="ml-1">{movie.vote_average}</span>
                <p className="card-text">{movie.overview.substring(0, 125).concat('....')}</p>
                <div className="d-flex justify-content-between p-0">
                  <span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span>
                  <span className="far fa-play-circle"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
