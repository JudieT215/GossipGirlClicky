import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron-fluid">
    <div className="row">{props.children}</div>
    <div>
        <h1>Gossip Girl Clicky Game</h1>
        <p>please click on a gossip girl charactor but not more than once!</p>
    </div>
  </div>
);

export default Header;