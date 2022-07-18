import { api } from '../app/api'

export const usersServices = api.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
        })
    })
})

export const { useGetUsersQuery } = usersServices