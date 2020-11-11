import { Button, Progress } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
function AddPhotos(props) {
  const history = useHistory();
  return (
    <div className="contents">
      <Progress percent={60} status="active" />
      <h1> TBD</h1>
      <Button
        onClick={() => {
          history.push('photos/finalize');
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default AddPhotos;
