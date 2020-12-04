import { Button } from 'antd';
import React from 'react';
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';

function Finalize(props) {
  const formConfirm = () => {
    props.formCosolidate();
  };

  const ShowPopContent = () => {
    return (
      <>
        <PopContent
          setProgress={props.setProgress}
          setStatus={props.setStatus}
          formConfirm={formConfirm}
        />
      </>
    );
  };
  return (
    <div className="contents">
      <ProductInfo />
      <Button>Cancel</Button>
      <Button
        onClick={() => {
          ShowPopContent();
        }}
      >
        Save Product
      </Button>
    </div>
  );
}

export default Finalize;
