import React, { useState } from 'react';
import FormButton from '../../../common/FormButton/FormButton';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
function AddPhotos({ setProgress, slider, setItem }) {
  const [data, setData] = useState({
    loading: false,
    image: null,
  });
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setData({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setData({
          imageUrl: imageUrl,
          loading: false,
        })
      );
    }
  };
  const uploadButton = (
    <div>
      {data.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="contents">
      <h1>Add photos of the item</h1>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {data.image ? (
          <img src={data.image} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>

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
