import React from "react";

import TweeterLogo from "../../assets/img/twitter-logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={TweeterLogo} alt="Tweeter Simulator" />
      <h1>Tweeter Simulator</h1>
    </div>
  );
}
