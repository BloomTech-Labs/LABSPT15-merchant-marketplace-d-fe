import { useOktaAuth } from '@okta/okta-react';
import React, { useEffect, useState } from 'react';
import ProductCarousel from '../ProductPage/ProductCarousel';
import {
  Rate,
  Avatar,
  Tag,
  Row,
  Col,
  Typography,
  Carousel,
  Divider,
  Button,
  Tooltip,
} from 'antd';
import { GlobalOutlined, HeartTwoTone } from '@ant-design/icons';
import MapContainer from '../../common/MapContainer';
import { getDSData } from '../../../api';

const ProductInfo = ({ item }) => {
  const { authState } = useOktaAuth();
  const [sellerInfo, setSellerInfo] = useState(null);

  useEffect(() => {
    getDSData(
      `${process.env.REACT_APP_API_URI}profile/${item.seller_profile_id}`,
      authState
    )
      .then(res => {
        setSellerInfo(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(sellerInfo);

  const { Title } = Typography;
  return (
    <div className="product-page">
      <Row>
        <Col span={14} offset={5}>
          <Row className="product-name">
            <Col span={22}>
              <Title>{item.item_name}</Title>
            </Col>
            <Col span={2}>
              <Tooltip title="Add to Favorites">
                <Button icon={<HeartTwoTone twoToneColor="#ec3944" />} />
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col span={15}>
              <ProductCarousel images={item.photos} />
            </Col>
            <Col span={9} className="product-content">
              <Row>
                <Col span={14}>
                  <Rate disabled defaultValue={2} />
                </Col>
                <Col span={10} className="total-votes">
                  <Title level={5}>3000</Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Title level={4} className="header">
                    Tags:
                  </Title>
                </Col>
                <Col span={24} className="tags-container">
                  {item.tags.map(tag => (
                    <Tag color={'geekblue'}>{tag.value}</Tag>
                  ))}
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Title level={4} className="header">
                    Seller:
                  </Title>
                </Col>
                <Col span={24} className="seller-container">
                  {sellerInfo ? sellerInfo.seller_name : ''}
                </Col>
              </Row>
              <Row className="buy-content">
                <Col span={24}>
                  <Title level={2}>
                    ${(item.price_in_cents / 100).toFixed(2)}
                  </Title>
                </Col>
                <Col span={24}>
                  <Button type="primary" className="shopping-button">
                    Shopping Cart
                  </Button>
                </Col>
                <Col span={24}>
                  <Button type="primary" className="buy-button">
                    Buy it Now!
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={14} offset={5} className="header">
          <Title level={4}>Description:</Title>
        </Col>
      </Row>
      <Row>
        <Col span={14} offset={5}>
          {item.description}
        </Col>
      </Row>
      <Row>
        <Col span={14} offset={5} className="header">
          <Title level={4}>Product Location:</Title>
        </Col>
        <Col span={14} offset={5} className="MapContainer-container">
          <MapContainer
            address={sellerInfo ? sellerInfo.physical_address : ''}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductInfo;
