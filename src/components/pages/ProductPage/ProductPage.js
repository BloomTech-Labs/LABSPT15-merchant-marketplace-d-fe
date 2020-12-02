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
          <div className="carousel-container">
            <ProductCarousel />
          </div>

          <div className="item">
            <h2>Item Name</h2>
            <h2 className="price">$XX.XX</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
