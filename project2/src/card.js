import React from "react";

function Card({ title, description, imageSrc }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
