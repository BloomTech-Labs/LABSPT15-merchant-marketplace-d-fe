import React from 'react';
import { Modal, Input, Form } from 'antd';

const EditProfileForm = ({ visible, fields, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Edit Profile Info"
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
        <Form.Item name="seller_name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="physical_address" label="Address">
          <Input />
        </Form.Item>
        <Form.Item name="phone_number" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item name="email_address" label="Email">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProfileForm;
