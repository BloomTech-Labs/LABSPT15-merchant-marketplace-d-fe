import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import './FormButton.styles.css';

const FormButton = ({
  setProgress,
  slider,
  progressPercent,
  text,
  review,
  formSubmit,
}) => {
  const history = useHistory();
  return (
    <div className="Btn_Container">
      <Button
        className="CancellBtn"
        onClick={() => history.push('/myprofile/inventory')}
      >
        Cancel
      </Button>
      {!review ? (
        <Button
          className="NextBtn"
          htmlType="submit"
          onClick={async () => {
            try {
              const values = await formSubmit();
              setProgress(progressPercent);
              slider.current.next();
            } catch (errorInfo) {
              console.log(('Failed:', errorInfo));
            }
          }}
        >
          {text}
        </Button>
      ) : (
        <Button
          className="NextBtn"
          htmlType="submit"
          onClick={() => {
            formSubmit();
            history.push('/myprofile/inventory');
          }}
        >
          {text}
        </Button>
      )}
    </div>
  );
};

export default FormButton;
