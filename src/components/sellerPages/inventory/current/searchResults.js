import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  updateProduct,
  fetchProducts,
  addItemImage,
} from '../../../../state/actions';
import ItemCard from '../../../common/cards/normalItem';
import useSearch from '../../../common/customHooks/useSearch';
import { NavLink } from 'react-router-dom';
import EditItemForm from '../../../sellerPages/inventory/EditItemForm';

const SearchResults = ({
  data,
  filter,
  updateProduct,
  updatedProduct,
  fetchProducts,
  addItemImage,
}) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, [submitted]);

  const searchData = useSearch(data, 'item_name', filter);

  const onEditButtonClick = item => {
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
        value: item.photo_url,
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

  const onSubmit = async values => {
    setVisible(false);
    console.log('values', values);
    // update item props on backend
    const upatedProduct = await updateProduct(values, authState);

    console.log('upProd', upatedProduct);

    await addItemImage(authState, updatedProduct.id, values.photo_url);

    // delete all the tags for this item that are in the db
    // add the new tags
    setSubmitted(!submitted);
  };

  return (
    <div>
      {searchData
        .sort((a, b) => a.id - b.id)
        .map(item => (
          <div>
            <Button
              className="edit-button"
              icon={<EditOutlined />}
              size="small"
              onClick={() => onEditButtonClick(item)}
            />
            <NavLink to={`/myprofile/inventory/productpage/${item.id}`}>
              <ItemCard
                id={item.id}
                key={item.id}
                name={item.item_name}
                price={item.price_in_cents}
                description={item.description}
                count={item.quantity_available}
                image={item.photo_url}
              />
            </NavLink>
          </div>
        ))}
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

export default connect(null, {
  updateProduct,
  fetchProducts,
  addItemImage,
})(SearchResults);
