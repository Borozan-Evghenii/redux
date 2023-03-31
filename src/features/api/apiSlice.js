import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: '/fakeApi'}),
    endpoints(build) {
        getPosts: build.query({
            query: () => '/posts'
        })
    }
})


export const {useGetPosts} = apiSlice