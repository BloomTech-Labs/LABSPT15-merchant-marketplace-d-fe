import React from 'react';
import { Form, Input, Cascader } from 'antd';
import FormButton from '../../../common/FormButton/FormButton';
import '../inventoryStyles.css';

function NewItem(props) {
  const [form] = Form.useForm();

  const onFinish = values => {
    props.setData(values);
  };

  return (
    <div className="contents">
      <h1>Main Information</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name">
          <Input placeholder="Name of Item" />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea placeholder="Short Description (Max 140 Characters)" />
        </Form.Item>
        <Form.Item name="category">
          <Cascader />
        </Form.Item>
        <Form.Item name="price">
          <Input placeholder="Price per item" />
        </Form.Item>
        <Form.Item name="tags">
          <Input placeholder="Create tags" />
        </Form.Item>
        <FormButton
          setProgress={props.setProgress}
          slider={props.slider}
          progressPercent={20}
        />
      </Form>
    </div>
  );
}

export default NewItem;
