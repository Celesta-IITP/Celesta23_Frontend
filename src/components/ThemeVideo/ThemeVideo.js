import React from "react";
import "./ThemeVideo.css";
import Video from "../../assets/video_text.svg";
import VideoTheme from "../../assets/theme_video.mp4";

function ThemeVideo() {
  return (
    <div className="video-container fade-in">
      <div className="theme-header">
        <h2 className="header-theme">Theme</h2>

        <img src={Video} className="header-video" alt="header-title"></img>
      </div>
      <div className="video-box">
        <video
          width="420"
          height="315"
          src={VideoTheme}
          className="video-element elem-size"
          controls
          autoPlay
        />
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
