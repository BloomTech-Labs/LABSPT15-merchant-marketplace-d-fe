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
            <Button
              handleClick={() => authService.logout()}
              buttonText="Logout"
            />
          </div>
        </div>
      </div>
      <SearchBar searchVisible={searchVisible} setData={setData} data={data} />
    </div>
  );
}

export default NavBar;
