import { Carousel, Image } from 'antd';
import React from 'react';
import { ReactReduxContext } from 'react-redux';
import './Carousel.css';

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
