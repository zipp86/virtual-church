import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveStreamComment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get('/api/live-stream-comment')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const liveStreamComment = new LiveStreamComment({ content: newComment, userId: 'admin' });
    await liveStreamComment.save();
    setNewComment('');
  };

  return (
    <div>
      <h2>Live Stream Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.content}</p>
            <p>By {comment.userId.username}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          New Comment:
          <input type="text" value={newComment} onChange={(event) => setNewComment(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LiveStreamComment;