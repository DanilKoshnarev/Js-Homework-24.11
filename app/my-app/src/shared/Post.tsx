import React, { useState } from 'react';
import './Post.css';

interface PostProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
}

const Post: React.FC<PostProps> = ({ title, description, imageUrl, author }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      <p className="author">Автор: {author}</p>
      <p>Лайки: {likes}</p>
      <button className="like-button" onClick={handleLike} disabled={liked}>Лайк</button>
    </div>
  );
};

export default Post;
