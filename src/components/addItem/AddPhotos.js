import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormButton from '../common/FormButton/FormButton';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import uploadcare from 'uploadcare-widget';
import { addItemImage } from '../../state/actions';
import { useOktaAuth } from '@okta/okta-react';

function AddPhotos({ setProgress, slider, setPhoto }) {
  function openUploadDialog(e) {
    let dialog = uploadcare.openDialog(null, {
      publicKey: '7f074009b333b2d5be63',
      imagesOnly: true,
    });
    dialog.done(function(file, fileGroup, list) {
      file.promise().done(function(fileInfo) {
        setPhoto(fileInfo.originalUrl);
        setImageData(fileInfo.originalUrl);
      });
    });
  }

  const [imageData, setImageData] = useState(
    'http://superprosamui.com/2016/wp-content/plugins/ap_background/images/default/default_large.png'
  );

  return (
    <div className="contents">
      <h1>Add a photo of the item</h1>
      <img src={imageData} />
      <button onClick={openUploadDialog}>Upload Picture</button>

      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={75}
        text="Next"
      />
    </div>
  );
}

export default connect(null, { addItemImage })(AddPhotos);
