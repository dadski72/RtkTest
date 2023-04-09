import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const testApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://whatever`,
  }),
  tagTypes: ['testInOrder'],
  endpoints: (build) => ({
    getTestOrder: build.query({
      query: () => '/test',
    }),
  }),
});

export const {useGetTestOrderQuery} = testApi;
