import React from "react";

function Card({ title, description, imageSrc, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageSrc} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
