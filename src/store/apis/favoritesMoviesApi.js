import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const FavoritesMoviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
      baseUrl: 'localhost:3005'
    }),    

    endpoints(builder) {
        return {
            fetchFavoritesMovies: builder.query({
            query: () => {
                return {
                url: 'favorites',
                method: 'GET',
                };
            },
            }),
            addFavoriteMovie: builder.mutation({
            query: (movie) => {
                return {
                url: 'favorites',
                method: 'POST',
                body: movie,
                };
            },
            }),

    };
    }

});


    const { useFetchFavoritesMoviesQuery, useAddFavoriteMovieMutation, useRemoveFavoriteMovieMutation } = FavoritesMoviesApi;
    export default FavoritesMoviesApi;
        