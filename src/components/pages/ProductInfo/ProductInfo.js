import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import { getDSData } from '../../../api';
import ProductCarousel from '../ProductPage/ProductCarousel';
import { Rate, Avatar, Tag } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const ProductInfo = ({ item }) => {
  const [img, setImg] = useState('');
  const { authState } = useOktaAuth();
  const imgGet = id => {
    getDSData(`${process.env.REACT_APP_API_URI}photo/${id}`, authState)
      .then(res => setImg(res[0]['url']))
      .catch(err => {
        console.log('Img get fail.');
      });
  };
  useEffect(() => {
    imgGet(item.id);
  }, []);

  let dollars = item.price_in_cents / 100;
  return (
    <div className="product-page">
      <div className="product-container">
        <div>
          {/* <ProductCarousel /> */}
          {/* {The carrousel avobe can be implemented later} */}
          <img src={img} />
        </div>

        <div className="item">
          <div className="name-price">
            <p>{item.item_name}</p>
            <p>${dollars}</p>
          </div>
          <div className="rating">
            <Rate />
          </div>
          <div className="store-name">
            <Avatar size="small" icon={<GlobalOutlined />} />
            <h3>Store Name</h3>
          </div>
          <p>location</p>
          <section>
            <p>{item.description}</p>
            {item.quantity_available !== 0 ? (
              <h2 style={{ color: 'green' }}>QTY: {item.quantity_available}</h2>
            ) : (
              <h2 style={{ color: 'red' }}>QTY: {item.quantity_available}</h2>
            )}
          </section>
        </div>
      </div>
      <section className="tags-container">
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
        <Tag className="tags">Tag</Tag>
      </section>
    </div>
  );
};

export default ProductInfo;
