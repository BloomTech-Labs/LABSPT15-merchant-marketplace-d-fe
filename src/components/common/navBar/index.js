import React from 'react';
import { Link } from 'react-router-dom';
import './navStyles.css';
function NavBar(props) {
  return (
    <div className="navOuter">
      <div className="navContainer">
        <div className="leftNav">
          <div className="logo">{props.logo}</div>
          <Link to="/myprofile/inventory">Inventory</Link>
          <Link>Oders</Link>
          <Link>Payment</Link>
        </div>
        <div className="rightNav">
          <Link to="/myprofile">My Profile</Link>
          <Link>Messeges</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
