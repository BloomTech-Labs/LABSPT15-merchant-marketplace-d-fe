import React from 'react';
import { Button } from 'antd';

import './FormButton.styles.css';

const FormButton = ({ setProgress, slider, progressPercent }) => {
  return (
    <div className="Btn_Container">
      <Button className="CancellBtn">Cancel</Button>
      <Button
        className="NextBtn"
        htmlType="submit"
        onClick={() => {
          setProgress(progressPercent);
          slider.current.next();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default FormButton;
