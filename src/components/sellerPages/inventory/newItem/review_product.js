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

  const ShowPopContent = ({ setStatus, setProgress }) => {
    return (
      <PopContent
        setProgress={setProgress}
        setStatus={setStatus}
        formConfirm={formConfirm}
      />
    );
  };
  return (
    <div className="contents">
      <NewProductInfo
        item={''}
        photos={photos}
        mainInfo={mainInfo}
        specForm={specForm}
      />
      <PopContent
        setProgress={setProgress}
        setStatus={setStatus}
        formConfirm={formConfirm}
      />
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={100}
        text="Save Product"
        review="true"
        popContent={() => ShowPopContent(setStatus, setProgress, formConfirm)}
      />
    </div>
  );
}

export default Finalize;
