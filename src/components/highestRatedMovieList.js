import { useFetchHighestRatedMoviesQuery } from "../store";
import MovieCard from "./movieCard"


function HighestRatedMovieList() {                                    
  const {data, error, isFetching } = useFetchHighestRatedMoviesQuery();    
                                        
let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
          .filter(movie => movie.poster_path !== null && movie.vote_average !== 0)
          .map((movie) => {return <MovieCard key={movie.id} movie={movie}></MovieCard>});
  }

    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default HighestRatedMovieList;
