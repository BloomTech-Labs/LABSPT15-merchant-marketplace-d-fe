import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { fetchSellerProfile } from '../../../../../state/actions';

const SellerInfo = ({ sellerInfo, fetchSellerProfile }) => {
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchSellerProfile(authState);
  }, []);

  return (
    <>
      <h2>Seller Info</h2>
      <h4>{sellerInfo.seller_name}</h4>
      <p>{sellerInfo.description}</p>
      <br />
      <p>{sellerInfo.physical_address}</p>
      <br />
      <p>{sellerInfo.phone_number}</p>
      <br />
      <p>{sellerInfo.email_address}</p>
      <br />
      <Button icon={<EditOutlined />} size="small">
        edit
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  sellerInfo: state.sellerInfo.sellerInfo,
  getSellerInfoStatus: state.sellerInfo.getSellerInfoStatus,
});

export default connect(mapStateToProps, { fetchSellerProfile })(SellerInfo);
