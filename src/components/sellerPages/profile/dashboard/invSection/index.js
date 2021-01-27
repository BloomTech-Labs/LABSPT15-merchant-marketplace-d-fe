import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../../../state/actions';
import SmallItemCard from '../../../../common/cards/smallItem';

function InvSection({ inventory, fetchProducts, getProductsStatus }) {
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);

  console.log(inventory);

  return (
    <>
      <h2>Inventory</h2>
      <h4>Details</h4>
      {inventory.map(item => (
        <SmallItemCard
          headerText={item.item_name}
          descText={item.description}
        />
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts })(InvSection);
