import React from 'react';
import NavBar from '../../common/navBar/index';
import ProductInfo from '../ProductInfo/ProductInfo';
import { connect } from 'react-redux';

const ProductPage = props => {
  const paramItemId = props.match.params.id;

  const item = props.inventory.find(item => {
    return item.id === Number(paramItemId);
  });
  return (
    <div>
      <NavBar />
      <ProductInfo item={item} />
    </div>
  );
};

const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, {})(ProductPage);
