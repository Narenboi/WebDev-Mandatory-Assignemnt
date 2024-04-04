import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { moviesApi } from './apis/moviesApi';
import { searchMovieReducer, changeSearchTerm } from './searchMovieSlice';


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    searchMovie: searchMovieReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});

setupListeners(store.dispatch);


export { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery } from './apis/moviesApi';
//export { useFetchFavoritesMoviesQuery, useAddFavoriteMovieMutation } from './apis/favoritesMoviesApi';
export {changeSearchTerm};

