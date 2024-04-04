// addToFavorites.js
import FavoritesMoviesApi from "../store/apis/favoritesMoviesApi";
import { useAddFavoriteMovieMutation } from "../store/apis/favoritesMoviesApi";

const addToFavorites = ({ movie }) => {
    const [addFavoriteMovie, { isLoading }] = useAddFavoriteMovieMutation();
  
    const handleAddToFavorites = () => {
      addFavoriteMovie(movie);
    };
  
    return (
      <span className="far fa-star" aria-hidden="true" onClick={handleAddToFavorites}></span>
    );
  };
  
  export default addToFavorites;
  