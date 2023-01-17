import React from "react";
import facebook from "./Facebook Icon.png";
import instagram from "./Instagram Icon.png";
import github from "./GitHub Icon.png";

export default function Footer() {
  return (
    <div className="social-links">
      <a>
        <img src={facebook} className="facebook" />
      </a>
      <a>
        <img src={instagram} className="instagram" />
      </a>
      <a>
        <img src={github} className="github" />
      </a>
    </div>
  );
}
