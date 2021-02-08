import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { fetchSellerProfile } from '../../../../../state/actions';

const SellerInfo = ({ sellerInfo, fetchSellerProfile }) => {
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchSellerProfile(authState);
  }, []);

  return (
    <>
      <h2>Seller Info</h2>
      <p>{sellerInfo.seller_name}</p>
      <p>{sellerInfo.description}</p>
      <p>{sellerInfo.physical_address}</p>
      <p>{sellerInfo.phone_number}</p>
      <p>{sellerInfo.email_address}</p>
    </>
  );
};

const mapStateToProps = state => ({
  sellerInfo: state.sellerInfo.sellerInfo,
  getSellerInfoStatus: state.sellerInfo.getSellerInfoStatus,
});

export default connect(mapStateToProps, { fetchSellerProfile })(SellerInfo);
