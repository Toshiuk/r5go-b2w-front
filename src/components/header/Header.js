import React from "react";

import "./header.css";

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      Scan Go! RocketFive{"  "}
      <span role="img" aria-label="shopping cart">
        🛒
      </span>
    </h1>
  </header>
);

export default Header;
