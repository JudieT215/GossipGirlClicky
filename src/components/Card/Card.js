import React from "react";
import "./Card.css";




const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Information:</strong> {props.information}
        </li>
        <li>
          <strong>Actor:</strong> {props.actor}
        </li>
      </ul>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);


export default Card;
