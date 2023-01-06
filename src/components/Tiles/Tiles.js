import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Tiles({ image1, image2, image3, image4 }) {
  return (
    <div className="grid-row fade-in">
      <div className="tiles-image-container">
        <LazyLoadImage src={image1} className="tiles-image" alt="image1" />
      </div>
      {image2 != null && (
        <div className="tiles-image-container span-2">
          <LazyLoadImage src={image2} className="tiles-image" alt="image2" />
        </div>
      )}
      {image3 != null && (
        <div className="tiles-image-container span-2">
          <LazyLoadImage src={image3} className="tiles-image" alt="image3" />
        </div>
      )}
      {image4 != null && (
        <div className="tiles-image-container">
          <LazyLoadImage src={image4} className="tiles-image" alt="image4" />
        </div>
      )}
    </div>
  );
}

export default Tiles;
