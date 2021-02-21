import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Table, Image, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchProducts, fetchTags } from '../../../../state/actions';
import { Link } from 'react-router-dom';

import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';

function CurrentInventory({ inventory, fetchProducts }) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);

  const dataSource =
    inventory.length > 0
      ? inventory.map(item => ({
          ...item,
          image: item.photos[0],
          tags: item.tags.map(tag => tag.value),
        }))
      : [];

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => (
        <Image width={50} height={50} src="error" fallback={image} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'item_name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price_in_cents',
      key: 'price',
      render: price => <>${price / 100}</>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity_available',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button
            className="edit-button"
            icon={<EditOutlined />}
            size="small"
            onClick={() => console.log('edit clicked')}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => console.log('delete clicked')}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />

      <SearchResults data={inventory} filter={searchData} />
      <Link to="/myprofile/inventory/additem">
        <Button>+Add Item</Button>
      </Link>
    </>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts, fetchTags })(
  CurrentInventory
);
