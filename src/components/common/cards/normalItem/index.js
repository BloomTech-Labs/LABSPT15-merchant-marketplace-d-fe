import React from 'react';
import './itemCardStyles.css';

function ItemCard({ name, description, price, image, count }) {
  let dollars = (price / 100).toFixed(2);

  return (
    <div className="cardContainer">
      <img src={image} className="cardImage" />
      <div className="cardDesc">
        <h2 className="descText">{name}</h2>
        <p className="descText" activeStyle={{ color: 'black' }}>
          {description}
        </p>
      </div>
      <div>
        <h2 className="cardPrice">${dollars}</h2>
        {count !== 0 ? (
          <h2 style={{ color: 'green' }}>QTY: {count}</h2>
        ) : (
          <h2 style={{ color: 'red' }}>QTY: {count}</h2>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
