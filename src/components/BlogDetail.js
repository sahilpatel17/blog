// src/components/BlogDetail.js
import React, { useState } from 'react';
import './BlogDetail.css';

function BlogDetail({ post }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="blog-detail">
      <h2>{post.title}</h2>
      <div className="post-meta">
        <span>{post.date}</span> | <span>{post.author}</span>
      </div>
      <img src={post.image} alt={post.title} className="post-image" />
      <p>{post.body}</p>
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="restaurant-link">
        View Restaurant on Google Maps
      </a>
      <div className="like-section">
        <button onClick={handleLike} className="like-button">Like</button>
        <span>{likes} Likes</span>
      </div>
    </div>
  );
}

export default BlogDetail;
