import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './productList.css';

const { Meta } = Card;

const ProductList = () => {
  const data = useSelector(state => state.products);

  const [products, setProducts] = useState('');

  console.log(data);

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
                <Meta
                  title={product.title}
                  description={product.price.toFixed(2)}
                />
              </Card>
            ))
          : 'Loading . . .'}
      </div>
    </div>
  );
};

export default ProductList;
