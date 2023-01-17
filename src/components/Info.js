import React from "react";
import photo from "./img-person.png";

export default function Info() {
  return (
    <div className="head-container">
      <div className="top">
        <img src={photo} className="photo" />
        <h1 class="full-name">Sadima Maharjan</h1>
        <h5>FrontEnd Developer</h5>
        <p>Websitelink</p>
      </div>
      <div className="bottom">
        <button className="email">Email</button>
        <button className="Linkedin">LinkedIn</button>
      </div>
    </div>
  );
}
