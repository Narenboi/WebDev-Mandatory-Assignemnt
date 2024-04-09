// HighestRatedTvShows.js
import React from 'react';
import { useFetchTopRatedTVShowsQuery } from "../store"; // Adjust import path as needed
import TvShowCard from "./TvShowCard"; // Assuming you already have a TvShowCard component

function HighestRatedTvShows() {
  const { data, error, isFetching } = useFetchTopRatedTVShowsQuery(); // Adjust hook as needed
  
  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading highest-rated TV shows.</div>;
  } else {
    if (!data || !data.results) {
      content = <div>No TV shows found.</div>;
    } else {
      content = data.results.map((tvShow) => {
        if (tvShow.poster_path) {
          return <TvShowCard key={tvShow.id} tvShow={tvShow} />;
        } else {
          return null;
        }
      });
    }
  }

  return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default HighestRatedTvShows;
