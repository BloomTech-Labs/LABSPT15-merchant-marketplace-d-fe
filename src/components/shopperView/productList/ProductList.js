import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { fetchProducts } from '../../../state/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Carousel } from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import { getDSData, getExampleData } from '../../../api';

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
    // getDSData(`${process.env.REACT_APP_API_URI}/items`, authState)
    //   .then(res => console.log(res))
    //   .error(err => console.error(err));
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="productListWrapper">
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div className="productsWrapper">
        {products
          ? products.map(product => (
              <Card
                className="productCard"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[<CheckOutlined />, <ShoppingCartOutlined />]}
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            ))
          : 'Oh no! Something went wrong. Please try again.'}
      </div>
    </div>
  );
};

export default ProductList;

// TO DO
// dispatch action to add products to redux store
// finish styling
// convert to live data
