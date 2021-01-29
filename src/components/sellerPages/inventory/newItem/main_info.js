import React from 'react';
import { Form, Input, Cascader } from 'antd';
import FormButton from '../../../common/FormButton/FormButton';
import '../inventoryStyles.css';

function NewItem({ setProgress, slider, setData }) {
  const [form] = Form.useForm();

  const onFinish = values => {
    setData(values);
  };
  // form names/labels need to match back-end table columns

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
          <Cascader placeholder="Choose a category" required />
        </Form.Item>
        <Form.Item name="price">
          <Input placeholder="Price per item" />
        </Form.Item>
        {/* quantity goes here */}
        <Form.Item name="tags">
          <Input placeholder="Create tags" />
        </Form.Item>
        <FormButton
          setProgress={setProgress}
          slider={slider}
          progressPercent={20}
          text="Next"
        />
      </Form>
    </div>
  );
}

export default NewItem;
