import React from 'react';
import NewProductInfo from './NewProductInfo';
import FormButton from '../common/FormButton/FormButton';

function FinalizeProduct({
  setProgress,
  slider,
  formConsolidate,
  mainInfo,
  specForm,
  photo,
  setPublished,
}) {
  const formConfirm = async () => {
    await formConsolidate();
  };

  return (
    <div className="contents">
      <NewProductInfo
        photo={photo}
        mainInfo={mainInfo}
        specForm={specForm}
        setPublished={setPublished}
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

export default FinalizeProduct;
