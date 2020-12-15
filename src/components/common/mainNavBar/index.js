import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from '../../common';
import './mainNavBar.css';
import { useOktaAuth } from '@okta/okta-react';

function MainNavBar() {
  const { authState, authService } = useOktaAuth();

  return (
    <div className="nav-bar">
      {/* logo */}
      <h1>Merchant</h1>
      <div className="menu">
        {authState.isAuthenticated && (
          <Link className="link" to="/myprofile">
            My Profile
          </Link>
        )}
        {authState.isAuthenticated && (
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        )}
        {!authState.isAuthenticated && (
          <Button handleClick={() => authService.login()} buttonText="Login" />
        )}
      </div>
    </div>
  );
}

export default MainNavBar;
