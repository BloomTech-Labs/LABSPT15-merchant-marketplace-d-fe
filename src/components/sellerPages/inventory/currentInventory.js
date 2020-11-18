import { Button } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../common/cards/ItemCards';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../state/actions/index';

function CurrentInventory({ inventory, fetchProducts, getProductsStatus }) {
  console.log('Inventory', inventory);
  console.log('status', getProductsStatus);

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="outerContainer">
      <div className="contents">
        <ItemCard
          name="testname"
          description="test description text"
          price="3.33"
        />
        <Link to="/inventory/additem">
          <Button>+Add Item</Button>
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts })(CurrentInventory);
