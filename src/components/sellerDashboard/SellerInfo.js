import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import { fetchSellerProfile, updateSellerProfile } from '../../state/actions';
import EditProfileForm from './EditProfileForm';
import '../../styles/dashboard.css';

const SellerInfo = ({
  sellerInfo,
  fetchSellerProfile,
  updateSellerProfile,
}) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchSellerProfile(authState);
  }, [submitted]);

  const onSubmit = async values => {
    setVisible(false);
    updateSellerProfile(values, authState);
    setSubmitted(!submitted);
  };

  const onEditButtonClick = () => {
    const {
      seller_name,
      description,
      physical_address,
      phone_number,
      email_address,
    } = sellerInfo;

    setVisible(true);
    setFields([
      {
        name: ['seller_name'],
        value: seller_name,
      },
      {
        name: ['description'],
        value: description,
      },
      {
        name: ['physical_address'],
        value: physical_address,
      },
      {
        name: ['phone_number'],
        value: phone_number,
      },
      {
        name: ['email_address'],
        value: email_address,
      },
    ]);
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
});

export default connect(mapStateToProps, {
  fetchSellerProfile,
  updateSellerProfile,
})(SellerInfo);
