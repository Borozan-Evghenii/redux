import React from 'react';
import {useGetUserByIdQuery} from "../api/apiSlice";

function PostAuthor({userId}) {
    const {data:author} = useGetUserByIdQuery(userId)
  return (
    <span>by {author ? author.name : 'Unknown author'}</span>
  );
}

export default PostAuthor;