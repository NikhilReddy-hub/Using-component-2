//write likebutton.jsx code here
import React from 'react';

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      <span> {count} likes</span>
    </div>
  );
};

export default LikeButton;