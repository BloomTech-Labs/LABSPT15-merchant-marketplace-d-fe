import { Button, Progress } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../../../common/progressBar/progressBar';
function AddPhotos(props) {
  const history = useHistory();
  return (
    <div className="outerContainer">
      <ProgressBar percent={60} status="active" />
      <div className="contents">
        <h1> TBD</h1>
        <Button
          onClick={() => {
            history.push('photos/finalize');
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default AddPhotos;
