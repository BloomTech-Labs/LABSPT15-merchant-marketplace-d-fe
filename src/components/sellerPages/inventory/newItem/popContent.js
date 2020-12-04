import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function PopContent(props) {
  return (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('');
            props.setProgress(100);
          }}
          onClick={() => {
            props.formConfirm();
          }}
        >
          Create and Stock
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('active');
            props.setProgress(90);
          }}
        >
          Save Item as Draft
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('exception');
            props.setProgress(0);
          }}
        >
          Cancel
        </Button>
      </Link>
    </div>
  );
}

export default PopContent;
