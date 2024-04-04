import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),

      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),    
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),
      fetchGuestSession: builder.query({
        query: () => {
          return {
            url: 'authentication/guest_session/new',
            params: {
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),  
      
      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/upcoming?language=en-US&page=1',
            params: {
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),
      
    };
  },
});

// Export the moviesApi
export const { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchGuestSessionQuery, useFetchUpcomingMoviesQuery } = moviesApi;
export { moviesApi };
