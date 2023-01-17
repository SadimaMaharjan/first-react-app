import React from "react";
import photo from "./img-person.png";

export default function Info() {
  return (
    <div className="head-container">
      <div className="top">
        <img src={photo} className="photo" />
        <h1 className="full-name">Sadima Maharjan</h1>
        <h5>FrontEnd Developer</h5>
        <p>Websitelink</p>
      </div>
      <div className="bottom">
        <a href="mailto:npsadimamaharjan@gmail.com" className="button-links">
          <button className="email">Email</button>
        </a>
        <a href="https://www.linkedin.com/in/sadima-maharjan/">
          <button className="Linkedin">LinkedIn</button>
        </a>
      </div>
    </div>
  );
}
