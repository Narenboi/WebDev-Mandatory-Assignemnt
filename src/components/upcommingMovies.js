import React from 'react';
import { useFetchUpcomingMoviesQuery } from '../store'; // Import the useFetchUpcomingMoviesQuery hook
import MovieCard from './movieCard'; // Import the movieCard component

function UpcomingMovies() {
  // Use the useFetchUpcomingMoviesQuery hook to fetch upcoming movies data
  const { data, error, isLoading } = useFetchUpcomingMoviesQuery();

  // Check loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies.</div>;
  }

  // Render the fetched movies data using movieCard component
  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div className="row row-cols-3 row-cols-md-2 m-4">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;
