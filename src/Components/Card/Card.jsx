import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-cont">
        <img src={props.image} alt="image" className="card-img" />
      </div>
      <p className="lang-name">{props.langName}</p>
    </div>
  );
};

export default Card;
