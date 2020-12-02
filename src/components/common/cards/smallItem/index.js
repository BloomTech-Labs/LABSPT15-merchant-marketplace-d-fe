import React from 'react';
import './smallItemStyles.css';

function SmallItemCard({ headerText, descText }) {
  return (
    <div className="smallCardContainer">
      <h3>{headerText}</h3>
      <p>{descText}</p>
    </div>
  );
}
export default SmallItemCard;
