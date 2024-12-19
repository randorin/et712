import React from 'react';

const Card = ({ title, description, productimage, onCardClick }) => {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={productimage} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
