import React from "react";
import "./GameBoard.css";

const GameBoard = props => (
  <div className="container">
  <div className ="row flexbox">{props.children}
  </div>
  </div>
);

export default GameBoard;
