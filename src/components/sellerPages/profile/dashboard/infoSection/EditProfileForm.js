import React from 'react';
import { Modal, Input, Form } from 'antd';

const EditProfileForm = ({ visible, fields, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const validatePhone = (rule, value, callback) => {
    const regex = new RegExp(/\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/);
    if (!regex.test(value)) {
      callback('Phone number must be (xxx) xxx-xxxx');
    } else {
      callback();
    }
  };

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
        <Form.Item
          name="seller_name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter a name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please enter a description',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="physical_address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Please enter an address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label="Phone"
          rules={[
            {
              required: true,
              message: 'Please enter a phone number',
            },
            {
              validator: validatePhone,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email_address"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'Invalid email address',
            },
            {
              required: true,
              message: 'Please input your email address',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProfileForm;
