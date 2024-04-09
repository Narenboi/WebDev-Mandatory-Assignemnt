import React from 'react';
import useAddToFavorites from './addToFavorites';
 

export const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

function MovieCard({ movie }) {
  const [addToFavorites, { isLoading, error }] = useAddToFavorites();

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  // Check if movie and movie.poster_path exist before accessing poster_path
  const posterPath = movie && movie.poster_path ? posterBasePath + movie.poster_path : '';

  return (
    <div className="col-lg-2 mb-4">
      <div className="card">
        {/* Render the image only if posterPath is not empty */}
        {posterPath && <img src={posterPath} className="card-img-top" alt="..." />}
        <div className="card-body">
          <h5 className="card-title "><span>{movie.title.substring(0, 200)}</span></h5>
          <span className="far fa-star" aria-hidden="true" onClick={handleAddToFavorites}></span>
          <span className="ml-1">{movie.vote_average}</span>
          <p className="card-text">{movie.overview.substring(0, 125).concat('....')}</p>
          <div className="d-flex justify-content-between p-0">
            <span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span>
            <span className="far fa-play-circle"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
