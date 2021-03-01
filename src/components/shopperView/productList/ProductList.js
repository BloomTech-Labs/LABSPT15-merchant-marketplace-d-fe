import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Carousel } from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './productList.css';

const { Meta } = Card;

const ProductList = () => {
  const { authState } = useOktaAuth();

  const data = useSelector(state => state.products);

  const [products, setProducts] = useState('');

  const dispatch = useDispatch();

  console.log(data);

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="productListWrapper">
      <div className="productsWrapper">
        {products
          ? products.map(product => (
              <Card
                className="productCard"
                cover={<img alt="example" src={product.image} />}
                actions={[<CheckOutlined />, <ShoppingCartOutlined />]}
              >
                <Meta title={product.title} description={product.description} />
              </Card>
            ))
          : 'Oh no! Something went wrong. Please try again.'}
      </div>
    </div>
  );
};

export default ProductList;
