import React from 'react';
import { Button } from 'antd';

const FormButton = props => {
  return (
    <>
      <Button>Cancel</Button>
      <Button
        htmlType="submit"
        onClick={() => {
          props.setProgress(props.progressPercent);
          props.slider.current.next();
        }}
      >
        Next
      </Button>
    </>
  );
};

export default FormButton;
