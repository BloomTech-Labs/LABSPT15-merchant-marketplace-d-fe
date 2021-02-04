import React from 'react';
import NavBar from '../common/navBar';
import Dashboard from './dashboard';
import CreateProfile from './createProfile';

const ShopperView = () => {
  return (
    <div>
      <NavBar />
      <Dashboard />
      {/* hard coded for development. will refactor to use redux routing. */}
      <CreateProfile />
    </div>
  );
};

export default ShopperView;
