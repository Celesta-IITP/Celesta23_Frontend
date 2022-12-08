import React from "react";
import "./ThemeVideo.css";

function ThemeVideo() {
  return (
    <div className="video-container">
      <div className="header">
        <h2 className="header-theme">Theme</h2>
        <h2 className="header-video">Video</h2>
      </div>
      <video
        width="320"
        height="240"
        controls
        className="video-element elem-size"
      >
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ThemeVideo;
