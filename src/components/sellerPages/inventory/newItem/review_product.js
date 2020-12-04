import { Button } from 'antd';
import React from 'react';
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';
import FormButton from '../../../common/FormButton/FormButton';

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
      <FormButton
        setProgress={props.setProgress}
        slider={props.slider}
        progressPercent={100}
        text="Save Product"
      />
    </div>
  );
}

export default Finalize;
