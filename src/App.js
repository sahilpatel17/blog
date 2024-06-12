// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import localImage from './assets/2.jpg';
import localImagev from './assets/3.jpg';
import BlogDetail from './components/BlogDetail';
import AddPost from './components/AddPost';
import AddComment from './components/AddComment';
import useLikes from './hooks/useLikes';
import Modal from './components/Modal';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [likes, setLikes] = useState([]);

  // Update likes state when blogPosts changes
  useEffect(() => {
    setLikes(Array(blogPosts.length).fill(0));
  }, [blogPosts]);

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] += 1;
      return newLikes;
    });
  };

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = () => {
      setBlogPosts([
        {
          title: "First Blog Post",
          date: "May 30, 2024",
          author: "Sahil Patel",
          image: localImage,
          body: "Samosa is a popular and savory Indian snack known for its crispy, golden-brown pastry shell and flavorful filling. Typically triangular, it is filled with spiced potatoes, peas, and sometimes meat, such as chicken or lamb. The dough is made from all-purpose flour, water, and oil, and the filling is seasoned with a blend of spices like cumin, coriander, and garam masala. Samosas are deep-fried until crispy and served hot, often accompanied by chutneys like mint or tamarind. Enjoyed worldwide, they are a staple at Indian gatherings, street food stalls, and as an appetizer in many cuisines.",
          link: "https://www.google.com/maps/place/Restaurant1",
          comments: []
        },
        {
          title: "Second Blog Post",
          date: "May 31, 2024",
          author: "Jeel Patel",
          image: localImagev,
          body: "Fries, also known as French fries, are a globally beloved snack and side dish made from potatoes. They are typically cut into thin strips, though variations like crinkle-cut or steak fries exist. These potato strips are deep-fried until golden and crispy on the outside, while remaining soft and fluffy on the inside. Seasoned with salt, fries can be enjoyed plain or accompanied by a variety of condiments, such as ketchup, mayonnaise, or vinegar. Originating in Belgium, fries have become a staple in fast food and casual dining, often paired with burgers, sandwiches, and other main courses.",
          link: "https://www.google.com/maps/place/Restaurant2",
          comments: []
        }
      ]);
    };

    fetchBlogPosts();
  }, []);

  const addNewPost = (post) => {
    setBlogPosts([...blogPosts, post]);
  };

  const openCommentModal = (index) => {
    setCurrentPostIndex(index);
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  const addComment = (comment) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[currentPostIndex].comments.push(comment);
    setBlogPosts(updatedPosts);
    closeCommentModal();
  };

  return (
    <Router>
      <div style={appStyles}>
        <div style={topBarStyles}>
          <div style={logoStyles}>My Blog</div>
          <div style={linksStyles}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/add-post" style={{ color: 'white', textDecoration: 'none' }}>Add Post</Link>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div style={blogPostsStyles}>
                {blogPosts.map((post, index) => (
                  <div style={blogPostContainerStyles} key={index}>
                    <div style={blogPostStyles}>
                      <h2>{post.title}</h2>
                      <div style={postMetaStyles}>
                        <span>{post.date}</span> | <span>{post.author}</span>
                      </div>
                      <img src={post.image} alt={post.title} style={postImageStyles} />
                      <p>{post.body}</p>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" style={restaurantLinkStyles}>
                        View Restaurant on Google Maps
                      </a>
                      <div style={postLinksStyles}>
                        <button onClick={() => handleLike(index)} style={{ color: '#007bff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
                          Like ({likes[index]})
                        </button>
                        <button onClick={() => openCommentModal(index)} style={{ color: '#007bff', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Add Comment</button>
                      </div>
                      <div>
                        {post.comments.map((comment, i) => (
                          <p key={i}>{comment}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
          <Route path="/add-post" element={<AddPost addNewPost={addNewPost} />} />
          <Route path="/post/:id" element={<BlogDetail blogPosts={blogPosts} />} />
        </Routes>
        <Modal isOpen={isCommentModalOpen} closeModal={closeCommentModal}>
          <AddComment onAddComment={addComment} />
        </Modal>
      </div>
    </Router>
  );
}

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const topBarStyles = {
  width: '100%',
  backgroundColor: '#333',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
};

const logoStyles = {
  fontSize: '1.5em',
};

const linksStyles = {
  display: 'flex',
  gap: '20px',
};

const blogPostsStyles = {
  width: '80%',
  marginTop: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const blogPostContainerStyles = {
  width: 'calc(50% - 20px)', 
  marginBottom: '20px',
};

const blogPostStyles = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const postMetaStyles = {
  color: '#777',
  fontSize: '0.9em',
  marginBottom: '10px',
};

const postImageStyles = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
  marginBottom: '10px',
};

const restaurantLinkStyles = {
  display: 'block',
  marginTop: '10px',
  color: '#007bff',
  textDecoration: 'none',
};

const postLinksStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

export default App;
