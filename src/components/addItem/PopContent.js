import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function PopContent({ setStatus, setProgress, formConfirm }) {
  return (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('');
            setProgress(100);
          }}
          onClick={() => {
            formConfirm();
          }}
        >
          Create and Stock
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('active');
            setProgress(90);
          }}
        >
          Save Item as Draft
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            setStatus('exception');
            setProgress(0);
          }}
        >
          Cancel
        </Button>
      </Link>
    </div>
  );
}

export default PopContent;
