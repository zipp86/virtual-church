import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BibleStudy = () => {
  const [bibleStudies, setBibleStudies] = useState([]);
  const [selectedBibleStudy, setSelectedBibleStudy] = useState(null);

  useEffect(() => {
    axios.get('/api/bible-study')
      .then(response => {
        setBibleStudies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBibleStudySelect = (bibleStudy) => {
    setSelectedBibleStudy(bibleStudy);
  };

  return (
    <div>
      <h2>Bible Study</h2>
      <ul>
        {bibleStudies.map((bibleStudy, index) => (
          <li key={index}>
            <a href="#" onClick={() => handleBibleStudySelect(bibleStudy)}>
              {bibleStudy.title}
            </a>
          </li>
        ))}
      </ul>
      {selectedBibleStudy && (
        <div>
          <h2>{selectedBibleStudy.title}</h2>
          <video src={selectedBibleStudy.videoUrl} controls />
        </div>
      )}
    </div>
  );
};

export default BibleStudy;