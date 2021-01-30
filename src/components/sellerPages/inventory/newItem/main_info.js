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
        <Form.Item name="item_name">
          <Input placeholder="Name of Item" />
        </Form.Item>
        <Form.Item name="description">
          <Input.TextArea placeholder="Short Description (Max 140 Characters)" />
        </Form.Item>
        {/* <Form.Item name="category">
          we need to change or delete it later
          <Cascader placeholder="Choose a category" />
        </Form.Item> */}
        <Form.Item name="price_in_cents">
          <Input placeholder="Price per item in cents" />
        </Form.Item>
        <Form.Item name="quantity_available">
          <Input placeholder="Quantity Available" />
        </Form.Item>
        {/* <Form.Item name="tags">
          <Input placeholder="Create tags" />
        </Form.Item> */}
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
