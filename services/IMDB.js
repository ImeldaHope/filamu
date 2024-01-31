import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const imdbApiKey = process.env.FILAMU_RAPID_API_KEY;

export const imdbApi = createApi({
  reducerPath: 'imdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://imdb8.p.rapidapi.com/auto-complete' }),
  endpoints: (builder) => ({

     // Get Genres
     getGenres: builder.query({
        query: () => `/genre/movie/list?api_key=${imdbApiKey}`,
      }),
      
   })  

})

export const {useGetGenresQuery} = imdbApi;