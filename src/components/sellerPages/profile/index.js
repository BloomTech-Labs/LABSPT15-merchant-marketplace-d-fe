import React from 'react';
import NavBar from '../../common/navBar';
import CurrentInventory from '../inventory/currentInventory';

function SellerProfile() {
  return (
    <>
      <NavBar />
      <div className="dashboard">
        <div className="dashInventory">
          <CurrentInventory />
        </div>
        <div className="dashOrder">
          <h2>Orders</h2>
        </div>
        <div className="dashCustomers">
          <h2>Customers</h2>
        </div>
      </div>
    </>
  );
}

export default SellerProfile;
