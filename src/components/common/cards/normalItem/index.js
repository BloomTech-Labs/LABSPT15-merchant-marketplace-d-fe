import React from 'react';
import './itemCardStyles.css';

function ItemCard({ name, description, price, image, count }) {
  return (
    <div className="cardContainer">
      <img src={image} className="cardImage" />
      <div className="cardDesc">
        <h2 className="descText">{name}</h2>
        <p className="descText">{description}</p>
      </div>
      <div>
        <h2 className="cardPrice">${price}</h2>
        <h2># {count}</h2>
      </div>
    </div>
  );
}

export default ItemCard;
