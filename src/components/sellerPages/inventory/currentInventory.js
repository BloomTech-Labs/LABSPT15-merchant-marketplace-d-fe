import { Button } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../common/cards/normalItem';
import NavBar from '../../common/navBar';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../state/actions/index';
import { useOktaAuth } from '@okta/okta-react';

function CurrentInventory({ inventory, fetchProducts, getProductsStatus }) {
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);
  return (
    <>
      <NavBar />
      <div className="outerContainer">
        <div className="contents">
          <ItemCard
            name="testname"
            description="test description text"
            price="3.33"
          />
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts })(CurrentInventory);
