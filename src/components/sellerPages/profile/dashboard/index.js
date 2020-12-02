import React from 'react';
import './dashboard.css';
import InvSection from './invSection';
import OrderSection from './orderSection';
import CustomerSection from './customerSection';

function Dashboard() {
  return (
    <div className="dashboard">
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

export default Dashboard;
