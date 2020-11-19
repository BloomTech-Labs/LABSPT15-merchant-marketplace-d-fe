import React from 'react';
import './orderStyles.css';

function OrderCard({ orderNumber, name, status, price, itemCount }) {
  return (
    <>
      <div className="orderCardContainer">
        <h1>{orderNumber}</h1>
        <div className="orderInfo">
          <p>{name}</p>
          <h4>{status}</h4>
        </div>
        <div className="orderInfo">
          <h4>${price}</h4>
          <p>{itemCount} items</p>
        </div>
        <div className="indicator"></div>
      </div>
    </>
  );
}

export default OrderCard;
