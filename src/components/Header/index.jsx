import React from "react";

const Header = (props) => (
  <>
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
    </header>
  </>
);

export default Header;
