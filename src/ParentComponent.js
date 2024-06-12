import React, { useState } from 'react';
import AddComment from './components/AddComment';

const ParentComponent = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h1>Comments</h1>
      <AddComment onAddComment={handleAddComment} />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
