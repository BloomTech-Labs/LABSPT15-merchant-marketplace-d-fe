import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import './home.css';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      HOME LANDING PAGE
      <p>
        <Button handleClick={() => authService.logout()} buttonText="Logout" />
      </p>
    </div>
  );
}
export default RenderHomePage;
