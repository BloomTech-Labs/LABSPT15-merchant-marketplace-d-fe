import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  updateProduct,
  fetchProducts,
  fetchItemPhotos,
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
  products,
  fetchProducts,
  fetchItemPhotos,
  itemPhotos,
  addItemImage,
}) => {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { authState } = useOktaAuth();

  const searchData = useSearch(products, 'item_name', filter);

  useEffect(() => {
    fetchProducts(authState);
  }, [submitted]);

  const onEditButtonClick = item => {
    fetchItemPhotos(authState, item.id);
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

  const onSubmit = async values => {
    setVisible(false);
    console.log('values', values);

    await updateProduct(values, authState);

    const itemPhotoUrls = itemPhotos.map(e => e.url);
    if (!itemPhotoUrls.includes(values.photo_url)) {
      await addItemImage(authState, values.id, values.photo_url);
    }

    console.log(fields);
    const oldTags = fields.filter(e => e.name[0] === 'tags')[0].value;
    const newTags = values.tags;

    if (
      JSON.stringify(oldTags.sort((a, b) => a.id - b.id)) !==
      JSON.stringify(newTags.sort((a, b) => a.id - b.id))
    ) {
      // delete all the tags for this item that are in the db
      // add the new tags
    }

    setSubmitted(!submitted);
  };

  if (searchData) {
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
                  image={item.photos[0]}
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
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  updatedProduct: state.updatedProduct.updatedProduct,
  products: state.products.products,
  itemPhotos: state.products.itemPhotos,
});

export default connect(mapStateToProps, {
  updateProduct,
  fetchProducts,
  fetchItemPhotos,
  addItemImage,
})(SearchResults);
