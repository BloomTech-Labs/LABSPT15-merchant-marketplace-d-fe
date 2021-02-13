import React from 'react';
import '../../styles/dashboard.css';
import InvSection from './InvSection';
import OrderSection from './OrderSection';
import CustomerSection from './CustomerSection';
import SellerInfo from './SellerInfo';

function SellerDashboard() {
  return (
    <div className="dashboard">
      <div className="dashItem">
        <SellerInfo />
      </div>
      <div className="dashItem">
        <InvSection />
      </div>
      <div className="dashItem">
        <OrderSection />
      </div>
      <div className="dashItem">
        <CustomerSection />
      </div>
    </div>
  );
}

export default SellerDashboard;
