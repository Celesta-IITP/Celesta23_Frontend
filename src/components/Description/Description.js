import React from "react";
import "./Description.css";

function Description({ heading, content }) {
  return (
    <section className="about fade-in">
      <h2 className="header">{heading}</h2>
      <p className="content">{content}</p>
    </section>
  );
}

export default Description;
