import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button, Image, Space, Tag, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchItemPhotos,
  addItemImage,
  deleteItemTags,
  addItemTag,
} from '../../../../state/actions';
import ItemCard from '../../../common/cards/normalItem';
import useSearch from '../../../common/customHooks/useSearch';
import { NavLink } from 'react-router-dom';
import EditItemForm from '../../../sellerPages/inventory/EditItemForm';
import '../inventoryStyles.css';

const SearchResults = ({
  data,
  filter,
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchItemPhotos,
  itemPhotos,
  addItemImage,
  deleteItemTags,
  addItemTag,
}) => {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { authState } = useOktaAuth();

  const searchData = useSearch(data, 'item_name', filter);

  const history = useHistory();

  useEffect(() => {
    fetchProducts(authState);
  }, [submitted]);

  useEffect(() => {
    if (searchData.length > 0) {
      setDataSource(
        searchData
          .sort((a, b) => a.id - b.id)
          .map(item => ({
            ...item,
            image: item.photos[0],
            tags: item.tags,
          }))
      );
    }
  }, [searchData]);

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
            <Tag key={tag.id}>{tag.value}</Tag>
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
      dataIndex: 'id',
      key: 'action',
      render: itemId => (
        <Space size="middle">
          <Button
            className="edit-button"
            icon={<EditOutlined />}
            size="small"
            onClick={e => {
              e.stopPropagation();
              onEditButtonClick(itemId);
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => onDeleteButtonClick(itemId)}
          />
        </Space>
      ),
    },
  ];

  const onEditButtonClick = itemId => {
    const item = dataSource.filter(e => e.id === itemId)[0];
    fetchItemPhotos(authState, itemId);
    setVisible(true);
    setFields([
      {
        name: ['id'],
        value: item.id,
      },
      {
        name: ['item_name'],
        value: item.item_name,
      },
      {
        name: ['description'],
        value: item.description,
      },
      {
        name: ['photo_url'],
        value: item.photos[0],
      },
      {
        name: ['tags'],
        value: item.tags,
      },
      {
        name: ['quantity_available'],
        value: item.quantity_available,
      },
      {
        name: ['price_in_cents'],
        value: item.price_in_cents,
      },
      {
        name: ['published'],
        value: item.published,
      },
    ]);
  };

  const onDeleteButtonClick = async itemId => {
    await deleteProduct(authState, itemId);
    fetchProducts(authState);
  };

  const onSubmit = async values => {
    setVisible(false);

    await updateProduct(values, authState);

    const itemPhotoUrls = itemPhotos.map(e => e.url);
    if (!itemPhotoUrls.includes(values.photo_url)) {
      await addItemImage(authState, values.id, values.photo_url);
    }

    const oldTags = fields.filter(e => e.name[0] === 'tags')[0].value;
    const newTags = values.tags;

    if (
      JSON.stringify(oldTags.sort((a, b) => a.id - b.id)) !==
      JSON.stringify(newTags.sort((a, b) => a.id - b.id))
    ) {
      await deleteItemTags(authState, values.id);
      newTags.forEach(tag => addItemTag(authState, values.id, tag.id));
    }

    setSubmitted(!submitted);
  };

  return (
    <div className="outerContainer">
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={r => ({
          onClick: () =>
            history.push(`/myprofile/inventory/productpage/${r.id}`),
        })}
        pagination={{ pageSize: 5 }}
      />
      <EditItemForm
        fields={fields}
        setFields={setFields}
        onChange={newFields => {
          setFields(newFields);
        }}
        visible={visible}
        onSubmit={onSubmit}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  itemPhotos: state.products.itemPhotos,
});

export default connect(mapStateToProps, {
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchItemPhotos,
  addItemImage,
  deleteItemTags,
  addItemTag,
})(SearchResults);
