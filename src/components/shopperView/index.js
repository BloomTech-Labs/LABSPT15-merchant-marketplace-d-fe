import React from 'react';
import NavBar from '../common/navBar';
import ProductList from './productList/ProductList';

import './shopperView.css';

const ShopperView = () => {
  return (
    <>
      <NavBar />
      <div className="shopperViewWrapper">
        <ProductList />
      </div>
    </>
  );
};

export default ShopperView;
