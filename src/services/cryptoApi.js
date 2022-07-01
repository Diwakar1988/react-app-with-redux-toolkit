// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'c2b078b542msh6aca1c1620b0a6bp1bf0d7jsn655dd7195e24',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};
  
// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://coinranking1.p.rapidapi.com',
    prepareHeaders: (headers) => {
        // add all common headers here
        headers.set('X-RapidAPI-Key', 'c2b078b542msh6aca1c1620b0a6bp1bf0d7jsn655dd7195e24');
        headers.set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
        return headers;
    } 
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => `/coins`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = cryptoApi