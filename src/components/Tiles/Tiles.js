import React from "react";

function Tiles({ image1, image2, image3, image4 }) {
  return (
    <div className="grid-row fade-in">
      <div className="tiles-image-container">
        <img src={image1} className="tiles-image"></img>
      </div>
      {image2 != null && (
        <div className="tiles-image-container span-2">
          <img src={image2} className="tiles-image"></img>
        </div>
      )}
      {image3 != null && (
        <div className="tiles-image-container span-2">
          <img src={image3} className="tiles-image"></img>
        </div>
      )}
      {image4 != null && (
        <div className="tiles-image-container">
          <img src={image4} className="tiles-image"></img>
        </div>
      )}
    </div>
  );
}

export default Tiles;
