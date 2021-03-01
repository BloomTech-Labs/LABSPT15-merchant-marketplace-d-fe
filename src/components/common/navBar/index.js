import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navStyles.css';
import SearchBar from '../searchbar';
import siteLogo from '../../../assets/merchantMarketplaceLogo.png';

function NavBar({ searchVisible, data, setData }) {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <NavLink to="/">
            <img
              className="logoImg"
              src={siteLogo}
              alt="merchant marketplace logo"
            />
          </NavLink>
        </div>
        <Link to="/myprofile/inventory">Inventory</Link>
        <Link to="/">Orders</Link>
        <Link to="/">Payment</Link>
        <Link to="/">Messages</Link>
      </div>
      <SearchBar searchVisible={searchVisible} setData={setData} data={data} />
    </div>
  );
}

export default NavBar;
