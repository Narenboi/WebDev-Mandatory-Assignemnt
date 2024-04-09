import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm } from './searchMovieSlice';
import FavoritesMoviesApi from './apis/favoritesMoviesApi';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [FavoritesMoviesApi.reducerPath]: FavoritesMoviesApi.reducer,
    searchMovie: searchMovieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(FavoritesMoviesApi.middleware);
  }
});

setupListeners(store.dispatch);


export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchPopularTVShowsQuery, useFetchTopRatedTVShowsQuery} from './apis/moviesApi';
//export { useFetchFavoritesMoviesQuery, useAddFavoriteMovieMutation } from './apis/favoritesMoviesApi';
export {changeSearchTerm};

