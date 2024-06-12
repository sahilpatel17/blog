import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAddComment(comment);
      setComment('');
    }
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const inputStyles = {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={inputStyles}
        placeholder="Add a comment"
      />
      <button type="submit" style={buttonStyles}>
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
