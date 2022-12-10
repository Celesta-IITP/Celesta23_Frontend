import React from "react";
import "./ThemeVideo.css";

function ThemeVideo() {
  return (
    <div className="video-container">
      <div className="header">
        <h2 className="header-theme">Theme</h2>
        <h2 className="header-video">Video</h2>
      </div>
      <div className="video-box">
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
        <div className="overlay overlay-1"></div>
        <div className="overlay overlay-2"></div>
        <div className="overlay overlay-3"></div>
        <div className="overlay overlay-4"></div>
        <div className="overlay overlay-5"></div>
      </div>
    </div>
  );
}

export default ThemeVideo;
