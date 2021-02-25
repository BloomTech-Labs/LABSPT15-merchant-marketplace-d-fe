import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button, Image, Space, Tag, Table, Input } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchItemPhotos,
  addItemImage,
  deleteItemTags,
  addItemTag,
  fetchTags,
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
  fetchTags,
  allTags,
}) => {
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [searchText, setSearchText] = useState('');
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
      sorter: (a, b) => a.item_name.localeCompare(b.item_name),
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={'Search name'}
            value={selectedKeys[0]}
            onChange={e =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record
          ? record.item_name.toLowerCase().includes(value.toLowerCase())
          : '',
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
      filters: allTags.map(tag => ({
        text: tag.tag_name,
        value: tag.tag_name,
      })),
      onFilter: (value, record) =>
        record.tags.filter(tag => tag.value === value).length > 0,
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
      sorter: (a, b) => a.price_in_cents - b.price_in_cents,
      render: price => <>${price / 100}</>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity_available',
      key: 'quantity',
      sorter: (a, b) => a.quantity_available - b.quantity_available,
    },
    {
      title: 'Action',
      dataIndex: 'id',
      key: 'action',
      render: itemId => (
        <Space size="middle">
          <Button
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
            onClick={e => {
              e.stopPropagation();
              onDeleteButtonClick(itemId);
            }}
          />
        </Space>
      ),
    },
  ];

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

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
  allTags: state.tags.allTags,
});

export default connect(mapStateToProps, {
  updateProduct,
  deleteProduct,
  fetchProducts,
  fetchItemPhotos,
  addItemImage,
  deleteItemTags,
  addItemTag,
  fetchTags,
})(SearchResults);
