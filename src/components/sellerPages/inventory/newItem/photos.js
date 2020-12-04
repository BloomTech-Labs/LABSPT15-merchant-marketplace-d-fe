import React from 'react';
import FormButton from '../../../common/FormButton/FormButton';
function AddPhotos(props) {
  return (
    <div className="contents">
      <h1>Add photos of the item</h1>
      <FormButton
        setProgress={props.setProgress}
        slider={props.slider}
        progressPercent={60}
      />
    </div>
  );
}

export default AddPhotos;
