import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Image.css";

function Image({ location }) {
  return (
    <div className="container fade-in">
      <img src={location} className="img" alt="images" />
    </div>
  );
}

export default Image;
