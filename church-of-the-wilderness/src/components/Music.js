import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Music = () => {
  const [music, setMusic] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState(null);

  useEffect(() => {
    axios.get('/api/music')
      .then(response => {
        setMusic(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleMusicSelect = (music) => {
    setSelectedMusic(music);
  };

  return (
    <div>
      <h2>Music</h2>
      <ul>
        {music.map((music, index) => (
          <li key={index}>
            <a href="#" onClick={() => handleMusicSelect(music)}>
              {music.title} by {music.artist}
            </a>
          </li>
        ))}
      </ul>
      {selectedMusic && (
        <div>
          <h2>{selectedMusic.title} by {selectedMusic.artist}</h2>
          <audio src={selectedMusic.url} controls />
        </div>
      )}
    </div>
  );
};

export default Music;