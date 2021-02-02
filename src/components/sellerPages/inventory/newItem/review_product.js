import React from 'react';
import PopContent from './popContent';
import NewProductInfo from './newProductInfo';
import FormButton from '../../../common/FormButton/FormButton';

function Finalize({
  setProgress,
  slider,
  formCosolidate,
  setStatus,
  photos,
  mainInfo,
  specForm,
}) {
  const formConfirm = () => {
    formCosolidate();
  };

  return (
    <div className="contents">
      <NewProductInfo
        item={''}
        photos={photos}
        mainInfo={mainInfo}
        specForm={specForm}
      />
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={100}
        text="Add Product"
        review="true"
        formSubmit={formConfirm}
      />
    </div>
  );
}

export default Finalize;
