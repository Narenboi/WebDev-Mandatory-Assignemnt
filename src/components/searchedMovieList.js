import { useFetchSearchMovieQuery } from "../store";
import MovieCard from "./movieCard";
import { useSelector, useDispatch } from "react-redux";



function SearchedMoviesList() {  
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.searchMovie.searchTerm;
    });
                                  //Bemærk Query-function kaldes automatisk nå komponenten bliver displayed
  const {data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);    //kaldet vil straks hente data i et result-objekt, som vi "destructure" til data, error og isLoading
               //Bemærk Mutation-function returnere et array med en function, som kan kaldes når data skal ændres
  //console.log(data, error, isFetching);                           //samt et objekt results der er meget tilsvarende det der returneres fra et Query-function kald
  //til start er results objektet "uinitialiseret", efter kald af funktionen vil det indeholde mange flere properties
                                                                   //med relevante værdier fx data, isSucces/isError mm 


                                                                  
  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results
        .filter(movie => movie.poster_path !== null)
        .map((movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    });
  }


    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}

export default SearchedMoviesList;
