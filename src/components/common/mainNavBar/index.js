import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'antd';
import { Button } from '../../common';
import './mainNavBar.css';
import { useOktaAuth } from '@okta/okta-react';

function MainNavBar() {
  const { authState, authService } = useOktaAuth();

  return (
    <div className="nav-bar">
      {/* logo */}
      <div className="logo">
        <span>MERCHANT</span> MARKETPLACE
      </div>
      <div className="menu">
        {authState.isAuthenticated && (
          <NavLink
            className="link"
            activeStyle={{ color: 'white' }}
            to="/myprofile"
          >
            My Profile
          </NavLink>
        )}
        {authState.isAuthenticated && (
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        )}
        {!authState.isAuthenticated && (
          <>
            <Button
              handleClick={() => authService.login()}
              buttonText="Login"
            />
            <NavLink
              className="link"
              activeStyle={{ color: 'white' }}
              to="/create-profile"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default MainNavBar;
