import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/'
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
    reducerPath: 'templateApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ['Users'],
    endpoints: () => ({})
})