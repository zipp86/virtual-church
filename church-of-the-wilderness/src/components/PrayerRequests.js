import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PrayerRequests() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState('');

  useEffect(() => {
    axios.get('/api/prayer-requests')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/prayer-requests', { content: newRequest })
      .then(response => {
        setRequests([...requests, response.data]);
        setNewRequest('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="prayer-requests">
      <h2>Prayer Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>{request.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRequest}
          onChange={event => setNewRequest(event.target.value)}
          placeholder="Write a new prayer request..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PrayerRequests;