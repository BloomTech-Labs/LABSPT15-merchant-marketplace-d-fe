import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from '../../common';
import './navStyles.css';
import SearchBar from '../searchbar';
import { useOktaAuth } from '@okta/okta-react';

function NavBar({ logo, searchVisible, data, setData }) {
  const { authState, authService } = useOktaAuth();
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">{logo}</div>
        <Link to="/myprofile/inventory">Inventory</Link>
        <Link>Orders</Link>
        <Link>Payment</Link>
        <Link className="message">Messages</Link>
      </div>
      <SearchBar searchVisible={searchVisible} setData={setData} data={data} />
    </div>
  );
}

export default NavBar;
