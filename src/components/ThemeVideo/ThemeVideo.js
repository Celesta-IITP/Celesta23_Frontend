import React from "react";
import "./ThemeVideo.css";
import Video from "../../assets/video_text.svg";

function ThemeVideo() {
  return (
    <div className="video-container fade-in">
      <div className="theme-header">
        <h2 className="header-theme">Theme</h2>

        <img src={Video} className="header-video" alt="header-title"></img>
      </div>
      <div className="video-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5NjFuS_24v8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="video-element elem-size"
        ></iframe>
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
