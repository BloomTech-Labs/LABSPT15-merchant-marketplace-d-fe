
import React, { Component } from 'react';
import { Carousel } from 'antd';
import './ProductPage.css';


function ProductCarousel({ images }) {
  return (
    <Carousel className="carousel-container">
      {images.map(img => (
        <Image src={img} />
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
