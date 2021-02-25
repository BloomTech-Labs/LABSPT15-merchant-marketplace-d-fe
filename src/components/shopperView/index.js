import React from 'react';
import NavBar from '../common/navBar';
import CreateProfile from './createProfile';

import './shopperView.css';

const ShopperView = () => {
  return (
    <>
      <NavBar />
      <div className="shopperViewWrapper">
        <CreateProfile />
      </div>
    </>
  );
};

export default ShopperView;
