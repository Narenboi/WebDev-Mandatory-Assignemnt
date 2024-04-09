// favoritesMoviesApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const FavoritesMoviesApi = createApi({
    reducerPath: 'favoriteMovies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/' // Specify the correct base URL for your API
    }),    

    endpoints(builder) {
        return {
            fetchFavoritesMovies: builder.query({
                query: () => {
                    return {
                        url: 'favorites', // Ensure that this endpoint matches the one in your server
                        method: 'GET',
                    };
                },
            }),
            addFavoriteMovie: builder.mutation({
                query: (movie) => {
                    return {
                        url: 'favorites', // Ensure that this endpoint matches the one in your server
                        method: 'POST',
                        body: movie,
                    };
                },
            }),

            removeFavoriteMovie: builder.mutation({
                query: (movieId) => {
                  return {
                    url: `favorites/${movieId}`, // Assuming the API supports DELETE method to remove a favorite movie
                    method: 'DELETE',
                  };
                },
              }),


        };
    },
});


const { useFetchFavoritesMoviesQuery, useAddFavoriteMovieMutation, useRemoveFavoriteMovieMutation } = FavoritesMoviesApi;
export { useFetchFavoritesMoviesQuery, useAddFavoriteMovieMutation, useRemoveFavoriteMovieMutation };
export default FavoritesMoviesApi;
