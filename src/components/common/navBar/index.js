import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import './navStyles.css';
import SearchBar from '../searchbar';

function NavBar({ logo, searchVisible }) {
  return (
    <div className="navOuter">
      <div className="navBackground">
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
      <SearchBar searchVisible={searchVisible} />
    </div>
  );
}

export default NavBar;
