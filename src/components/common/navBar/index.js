import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import './navStyles.css';

function NavBar({ logo }) {
  return (
    <div className="navOuter">
      <div className="navContainer">
        <div className="leftNav">
          <div className="logo">{logo}</div>
          <Link to="/myprofile/inventory">Inventory</Link>
          <Link>Orders</Link>
          <Link>Payment</Link>
        </div>
        <div className="rightNav">
          <Link to="/myprofile">My Profile</Link>
          <Badge count={10}>
            <Link>Messeges</Link>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
