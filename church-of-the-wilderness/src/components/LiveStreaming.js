import React from 'react';

function LiveStreaming() {
  return (
    <div className="live-streaming">
      <h2>Live Streaming</h2>
      <iframe
        src="https://www.youtube.com/embed/LIVE_STREAM_URL"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
}

export default LiveStreaming;