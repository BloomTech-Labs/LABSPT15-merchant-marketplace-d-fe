import React from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../../../../common/cards/orderCard';

function OrderSection() {
  return (
    <>
      <h2>Orders</h2>
      <h4>Active</h4>
      <OrderCard
        orderNumber="#1"
        name="Name McName"
        status="Pick-Up"
        price={3.33}
        itemCount={9}
      />
      <Link className="activeLink">
        <p className="activeLink">All Active Orders</p>
      </Link>
      <h4>Fullfiled & cancelled</h4>
      <OrderCard
        orderNumber="#0"
        name="Name McName"
        status="Pick-Up"
        price={3.33}
        itemCount={9}
      />
    </>
  );
}
export default OrderSection;
