import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormButton from '../../../common/FormButton/FormButton';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import uploadcare from 'uploadcare-widget';
import { addItemImage } from '../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';

function AddPhotos({ setProgress, slider, setItem }) {
  const { authState } = useOktaAuth();
  function openUploadDialog(e) {
    let dialog = uploadcare.openDialog(null, {
      publicKey: '7f074009b333b2d5be63',
      imagesOnly: true,
    });
    dialog.done(function(file, fileGroup, list) {
      file.promise().done(function(fileInfo) {
        console.log('fileinfo: ', fileInfo);
        addItemImage(authState, 15, fileInfo.originalUrl);
      });
    });
  }

  // const [data, setData] = useState({
  //   loading: false,
  //   image: null,
  // });

  // const getBase64 = (img, callback) => {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // };

  // const beforeUpload = file => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('You can only upload JPG/PNG file!');
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error('Image must smaller than 2MB!');
  //   }
  //   return isJpgOrPng && isLt2M;
  // };

  // const handleChange = info => {
  //   if (info.file.status === 'uploading') {
  //     setData({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, imageUrl =>
  //       setData({
  //         imageUrl: imageUrl,
  //         loading: false,
  //       })
  //     );
  //   }
  // };
  // const uploadButton = (
  //   <div>
  //     {data.loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  return (
    <div className="contents">
      <h1>Add photos of the item</h1>
      <div
        onClick={openUploadDialog}
        className="ant-upload ant-upload-select ant-upload-select-picture-card"
      >
        +
      </div>

      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={60}
        text="Next"
      />
    </div>
  );
}

export default connect(null, { addItemImage })(AddPhotos);
