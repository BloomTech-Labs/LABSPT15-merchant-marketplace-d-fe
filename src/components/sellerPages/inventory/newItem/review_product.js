import React from 'react';
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';
import FormButton from '../../../common/FormButton/FormButton';

function Finalize(props) {
  const formConfirm = () => {
    props.formCosolidate();
  };

  const ShowPopContent = ({ setStatus, setProgress }) => {
    return (
      <>
        <PopContent
          setProgress={setProgress}
          setStatus={setStatus}
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
        review="true"
        popContent={ShowPopContent}
      />
    </div>
  );
}

export default Finalize;
