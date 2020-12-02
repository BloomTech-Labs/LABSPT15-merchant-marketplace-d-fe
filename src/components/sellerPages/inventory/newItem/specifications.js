import React from 'react';
import '../inventoryStyles.css';
import { Form, Input } from 'antd';
import FormButton from '../../../common/FormButton/FormButton';

function MoreInfo(props) {
  const onFinish = values => {
    props.setData(values);
  };

  return (
    <div className="contents">
      <h1>More Information</h1>
      <Form onFinish={onFinish}>
        <Form.Item name="full_description">
          <Input.TextArea placeholder="Full Description" />
        </Form.Item>
        <Form.Item name="custom_tags">
          <Input placeholder="Tags/Keywords" />
        </Form.Item>
        <FormButton
          setProgress={props.setProgress}
          slider={props.slider}
          progressPercent={40}
        />
      </Form>
    </div>
  );
}

export default MoreInfo;
