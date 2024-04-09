// moviesApi.js
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

      fetchPopularTVShows: builder.query({
        query: () => ({
          url: 'discover/tv',
          params: {
            sort_by: 'popularity.desc'
          },
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzM2ZmYTA0YmUwNzY1NDcyMmQ5Njk5N2U0OTAxZCIsInN1YiI6IjY1Y2NhOWZhZWQyYWMyMDE4NmFmMzMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFK03PVl3z-EnL5wrBL9OynDypdm6nHTDuoS7TpPXRo'
          }
        }),
      }),

      fetchTopRatedTVShows: builder.query({
        query: () => ({
          url: 'tv/top_rated',
          params: {
            language: 'en-US',
            page: 1,
          },
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzM2ZmYTA0YmUwNzY1NDcyMmQ5Njk5N2U0OTAxZCIsInN1YiI6IjY1Y2NhOWZhZWQyYWMyMDE4NmFmMzMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFK03PVl3z-EnL5wrBL9OynDypdm6nHTDuoS7TpPXRo',
          },
        }),
      }),

      fetchPlayMovieTrailer: builder.query({
        query: (movieID) => ({
          url: `movie/${movieID}/videos`,
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzM2ZmYTA0YmUwNzY1NDcyMmQ5Njk5N2U0OTAxZCIsInN1YiI6IjY1Y2NhOWZhZWQyYWMyMDE4NmFmMzMzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IFK03PVl3z-EnL5wrBL9OynDypdm6nHTDuoS7TpPXRo',
          },
        }),
      }),
      
   

      
    };
  },
});

// Export the moviesApi
export const { useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchGuestSessionQuery, useFetchUpcomingMoviesQuery, useFetchPopularTVShowsQuery, useFetchTopRatedTVShowsQuery, useFetchPlayMovieTrailerQuery } = moviesApi;
export { moviesApi };
