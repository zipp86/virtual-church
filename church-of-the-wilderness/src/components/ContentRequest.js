import React, { useState } from 'react';
import axios from 'axios';

const ContentRequest = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const contentRequest = new ContentRequest({ title, description });
    await contentRequest.save();
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Content Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContentRequest;