// app.js
import React from 'react';
import './App.css';
import localImage from './assets/2.jpg';
import localImagev from './assets/3.jpg';

const blogPosts = [
  {
    title: "First Blog Post",
    date: "May 30, 2024",
    author: "Sahil Patel",
    image: localImage,
    body: "Samosa is a popular and savory Indian snack known for its crispy, golden-brown pastry shell and flavorful filling. Typically triangular, it is filled with spiced potatoes, peas, and sometimes meat, such as chicken or lamb. The dough is made from all-purpose flour, water, and oil, and the filling is seasoned with a blend of spices like cumin, coriander, and garam masala. Samosas are deep-fried until crispy and served hot, often accompanied by chutneys like mint or tamarind. Enjoyed worldwide, they are a staple at Indian gatherings, street food stalls, and as an appetizer in many cuisines.",
    link: "https://www.google.com/maps/place/Restaurant1"
  },
  {
    title: "Second Blog Post",
    date: "May 31, 2024",
    author: "Jeel Patel",
    image: localImagev,
    body: "Fries, also known as French fries, are a globally beloved snack and side dish made from potatoes. They are typically cut into thin strips, though variations like crinkle-cut or steak fries exist. These potato strips are deep-fried until golden and crispy on the outside, while remaining soft and fluffy on the inside. Seasoned with salt, fries can be enjoyed plain or accompanied by a variety of condiments, such as ketchup, mayonnaise, or vinegar. Originating in Belgium, fries have become a staple in fast food and casual dining, often paired with burgers, sandwiches, and other main courses.",
    link: "https://www.google.com/maps/place/Restaurant2"
  }
];

function App() {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="logo">My Blog</div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post-container" key={index}>
            <div className="blog-post">
              <h2>{post.title}</h2>
              <div className="post-meta">
                <span>{post.date}</span> | <span>{post.author}</span>
              </div>
              <img src={post.image} alt={post.title} className="post-image" />
              <p>{post.body}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="restaurant-link">
                View Restaurant on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
