import React from 'react';
import './itemCardStyles.css';

function ItemCard(props) {
  return (
    <div className="cardContainer">
      <div className="cardImage">PlaceHold</div>
      <div className="cardDesc">
        <h2 className="descText">{props.name}</h2>
        <p className="descText">{props.description}</p>
      </div>
      <div>
        <h2 className="cardPrice">${props.price}</h2>
      </div>
    </div>
  );
}

export default ItemCard;
