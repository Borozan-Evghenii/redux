import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({baseUrl: '/fakeApi'}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: (result = [], error, arg)=>[
                'Posts',
                ...result.map(({id})=> ({type:'Posts', id}))
            ]
        }),
        getPost: builder.query({

            query: postId => `/posts/${postId}`,
            providesTags: (result, error, arg) =>[{type: 'Posts', id: arg}]

        }),
        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: '/posts',
                method: 'POST',
                body: initialPost
            }),
          invalidatesTags: ['Posts']
        }),
        editPost: builder.mutation({
            query: (post)=>({
                url: `posts/${post.id}`,
                method: 'PATCH',
                body: post,
            }),
            invalidatesTags: (result, error, arg) => [{type: 'Posts', id: arg.id}]
        }),
        getUsers: builder.query({
            query: ()=>'/users'
        }),
        getUserById: builder.query({
            query: userId=>({
                url: `/users/${userId}`
            })
        })


    })
})


export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useEditPostMutation,
    useGetUsersQuery,
    useGetUserByIdQuery
} = apiSlice