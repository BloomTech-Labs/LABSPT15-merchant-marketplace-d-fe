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
      <NavBar searchVisible={true} />
      <div className="outerContainer">
        <div className="contents">
          {inventory.map(item => (
            <ItemCard
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
        </div>
      </div>
      <Button
        onClick={() => {
          console.log(inventory);
          console.log(fetchProducts);
        }}
      >
        Console Log
      </Button>
    </>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts })(CurrentInventory);
