import React from 'react';
import {useDispatch} from "react-redux";
import {updateReaction} from "./postSlice";

const reactionEmoji = {
   hooray: '🎉', heart: '❤️', rocket: '🚀', eyes: '👀'
}

function ReactionButton({post}) {
  const dispatch = useDispatch()
  //const reactionButton = Object.entries(reactionEmoji)
  return (
    <div>
      {
        // reactionButton.map(([name, emoji]) =>
        // <button
        //   key={name}
        //   type="button"
        //   className="muted-button reaction-button"
        //   onClick={()=> dispatch(updateReaction({id: post.id , reaction: name}))}>
        //   {emoji} {post.reactions[name]}
        // </button>)

      }
    </div>);
}

export default ReactionButton;