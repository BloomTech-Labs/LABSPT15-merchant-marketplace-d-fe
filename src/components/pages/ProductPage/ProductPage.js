import React from 'react';
import NavBar from '../../common/navBar/index';
import './productPage.css';
import ProductCarousel from './ProductCarousel';

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="product-page">
        <div className="product-container">
          <div className="carousel">
            <ProductCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
