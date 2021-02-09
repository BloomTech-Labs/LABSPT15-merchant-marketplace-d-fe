import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button, Modal, Input, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  fetchSellerProfile,
  updateSellerProfile,
} from '../../../../../state/actions';
import '../dashboard.css';

const SellerInfo = ({
  sellerInfo,
  fetchSellerProfile,
  updateSellerProfile,
  updateSellerProfileStatus,
}) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const { authState } = useOktaAuth();

  const onSubmit = values => {
    setVisible(false);
    updateSellerProfile(values, authState);
    fetchSellerProfile(authState);
  };

  useEffect(() => {
    fetchSellerProfile(authState);
  }, []);

  console.log(sellerInfo);

  const onEditButtonClick = () => {
    setVisible(true);
    setFields([
      {
        name: ['seller_name'],
        value: sellerInfo.seller_name,
      },
      {
        name: ['description'],
        value: sellerInfo.description,
      },
      {
        name: ['physical_address'],
        value: sellerInfo.physical_address,
      },
      {
        name: ['phone_number'],
        value: sellerInfo.phone_number,
      },
      {
        name: ['email_address'],
        value: sellerInfo.email_address,
      },
    ]);
  };

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

  return (
    <>
      <div className="dashHeader">
        <h2>Seller Info</h2>
        <Button
          className="edit-button"
          icon={<EditOutlined />}
          size="small"
          onClick={onEditButtonClick}
        />
      </div>
      {/* <img src={sellerInfo.avatar} */}
      <h4>{sellerInfo.seller_name}</h4>
      <p>{sellerInfo.description}</p>
      <br />
      <p>{sellerInfo.physical_address}</p>
      <br />
      <p>{sellerInfo.phone_number}</p>
      <br />
      <p>{sellerInfo.email_address}</p>
      <EditProfileForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
        }}
        visible={visible}
        onSubmit={onSubmit}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

const mapStateToProps = state => ({
  sellerInfo: state.sellerInfo.sellerInfo,
  updateSellerProfileStatus: state.sellerInfo.updateSellerProfileStatus,
});

export default connect(mapStateToProps, {
  fetchSellerProfile,
  updateSellerProfile,
})(SellerInfo);
