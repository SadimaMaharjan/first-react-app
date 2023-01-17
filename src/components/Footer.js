import React from "react";
import facebook from "./Facebook Icon.png";
import instagram from "./Instagram Icon.png";
import github from "./GitHub Icon.png";

export default function Footer() {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/">
        <img src={facebook} className="facebook" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagram} className="instagram" />
      </a>
      <a href="https://github.com/SadimaMaharjan/">
        <img src={github} className="github" />
      </a>
    </div>
  );
}
