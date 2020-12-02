import React from 'react';
import { Button } from 'antd';

import './FormButton.styles.css';

const FormButton = props => {
  return (
    <div className="Btn_Container">
      <Button className="CancellBtn">Cancel</Button>
      <Button
        className="NextBtn"
        htmlType="submit"
        onClick={() => {
          props.setProgress(props.progressPercent);
          props.slider.current.next();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default FormButton;
