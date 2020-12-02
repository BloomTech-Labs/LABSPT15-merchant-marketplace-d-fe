import React from 'react';
import FormButton from '../../../common/FormButton/FormButton';
function AddPhotos(props) {
  return (
    <div className="contents">
      <h1> TBD</h1>
      <FormButton
        setProgress={props.setProgress}
        slider={props.slider}
        progressPercent={20}
      />
    </div>
  );
}

export default AddPhotos;
