import React from 'react';
import { Button } from 'antd';
function AddPhotos(props) {
  return (
    <div className="contents">
      <h1> TBD</h1>
      <Button
        onClick={() => {
          props.setProgress(60);
          props.slider.current.next();
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default AddPhotos;
