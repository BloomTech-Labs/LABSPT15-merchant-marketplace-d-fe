import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import './FormButton.styles.css';

const FormButton = ({ setProgress, slider, progressPercent, text }) => {
  const history = useHistory();
  return (
    <div className="Btn_Container">
      <Button
        className="CancellBtn"
        onClick={() => history.push('/myprofile/inventory')}
      >
        Cancel
      </Button>
      <Button
        className="NextBtn"
        htmlType="submit"
        onClick={() => {
          setProgress(progressPercent);
          slider.current.next();
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default FormButton;
