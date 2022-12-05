import React from "react";
import "./Description.css";

function Description({ heading, content }) {
  return (
    <section className="about">
      <h2 className="header">{heading}</h2>
      <p className="content">
        {content}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas?
      </p>
    </section>
  );
}

export default Description;
