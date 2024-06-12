// src/components/AddPost.js
import React, { useState } from 'react';
import './AddPost.css';

function AddPost({ addNewPost }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      date,
      author,
      image,
      body,
      link
    };
    addNewPost(newPost);
  };

  return (
    <div className="add-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Google Maps Link:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} required />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
