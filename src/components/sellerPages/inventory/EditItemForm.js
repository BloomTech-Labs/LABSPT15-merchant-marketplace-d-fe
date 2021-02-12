import React, { useState, useEffect } from 'react';
import { Modal, Input, Form, Typography } from 'antd';

const EditItemForm = ({ visible, fields, onSubmit, onCancel }) => {
  const { Text } = Typography;

  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Edit Item"
      okText="submit"
      cancelText="cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onSubmit(values);
          })
          .catch(info => {
            console.log('Validation failed:', info);
          });
      }}
    >
      <Form
        form={form}
        fields={fields}
        layout="horizontal"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item name="item_name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input />
        </Form.Item>
        <Form.Item name="quantity_available" label="Quantity">
          <Input />
        </Form.Item>
        <Form.Item name="price_in_cents" label="Price in cents">
          <Input />
        </Form.Item>
        <Form.Item name="published" label="Published">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditItemForm;
