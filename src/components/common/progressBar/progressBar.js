import React from 'react';
import { Progress } from 'antd';
import './progressBarStyles.css';

function ProgressBar(props) {
  return (
    <div className="progressContainer">
      <Progress percent={props.percent} status={props.status} />
    </div>
  );
}

export default ProgressBar;
