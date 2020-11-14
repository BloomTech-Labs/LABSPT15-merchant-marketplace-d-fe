import React, { useState } from 'react';
import { Form, Input, Cascader, Button } from 'antd';
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
        <Form.Item name="product_name">
          <Input placeholder="Name of Item" />
        </Form.Item>
        <Form.Item name="product_synopsis">
          <Input.TextArea placeholder="Short Description (Max 140 Characters)" />
        </Form.Item>
        <Form.Item name="tags">
          <Cascader />
        </Form.Item>
        <Button
          htmlType="submit"
          onClick={() => {
            props.setProgress(20);
            props.slider.current.next();
          }}
        >
          Next
        </Button>
      </Form>
    </div>
  );
}

export default NewItem;
