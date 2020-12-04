import React from 'react';
import FormButton from '../../../common/FormButton/FormButton';
function AddPhotos({ setProgress, slider, setData }) {
  return (
    <div className="contents">
      <h1>Add photos of the item</h1>
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={60}
        text="Next"
      />
    </div>
  );
}

export default AddPhotos;
