import { Routes, Route, Link } from 'react-router-dom';
import { useFetchGuestSessionQuery } from './store/apis/moviesApi'; // Import the useFetchGuestSessionQuery hook
import PopularMoviesList from "./components/popularMovieList";
import HighestRatedMovieList from "./components/highestRatedMovieList"
import MovieImg from './assets/Image/movie_black2.jpg';
import SearchMovie from './components/searchMovie';
import SearchedMovieList from './components/searchedMovieList';
import Home from './components/home';
import UpcommingMovies from './components/upcommingMovies';
import FavoriteMovies from './components/favoriteMovies';
import { useFetchFavoritesMoviesQuery } from './store/apis/favoritesMoviesApi';

/**
 * Renders the main application component.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
function App() {
  // Use the useFetchGuestSessionQuery hook to fetch the guest session
  const { data: guestSessionData } = useFetchGuestSessionQuery();
  //const { data: favoriteMovies, error, isLoading, refetch } = useFetchFavoritesMoviesQuery();

  // Log the guest session ID
  console.log("Guest Session ID:", guestSessionData?.guest_session_id);
  //console.log("Favorite Movies:", favoriteMovies);

  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular Movies</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated Movies</Link>
            <Link to='/favorites' /*onClick={useFetchFavoritesMoviesQuery} */ className="nav-item nav-link">My favorite Movies</Link>
            <Link to='/upcomming-Movies' className="nav-item nav-link">Upcomming Movies</Link>
          </nav>
        </div> 
          <span className='h1'>React MovieLookUP <img className="rounded movie_img m-3" src={MovieImg} alt="Movie" width="75" height="75"/></span>
      <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router<SearchMovie/></span>
        </div>
        <Routes> 
            <Route path='/' element={<Home/>} />   
            <Route path='/popular' element={<PopularMoviesList/>} />     
            <Route path='/highest-rated' element={<HighestRatedMovieList/>} />
            <Route path='/searchedMovie' element={<SearchedMovieList/>} /> 
            <Route path='/upcomming-Movies' element={<UpcommingMovies/>} />
            <Route path='/favorites' element={<FavoriteMovies/>} />
        </Routes>

    </div>
  );
}

export default App;