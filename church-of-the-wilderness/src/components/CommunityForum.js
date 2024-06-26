import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommunityForum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    axios.get('/api/forum/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/forum/posts', { content: newPost })
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="community-forum">
      <h2>Community Forum</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newPost}
          onChange={event => setNewPost(event.target.value)}
          placeholder="Write a new post..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CommunityForum;