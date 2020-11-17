import { Button } from 'antd';
import React from 'react';
// import { Button } from 'antd';

function PopContent(props) {
  return (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
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
      <Button
        onMouseEnter={() => {
          props.setStatus('active');
          props.setProgress(90);
        }}
      >
        Save Item as Draft
      </Button>
      <Button
        onMouseEnter={() => {
          props.setStatus('exception');
          props.setProgress(0);
        }}
      >
        Cancel
      </Button>
    </div>
  );
}

export default PopContent;
