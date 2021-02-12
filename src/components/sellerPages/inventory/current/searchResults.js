import React, { useState } from 'react';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import ItemCard from '../../../common/cards/normalItem';
import useSearch from '../../../common/customHooks/useSearch';
import { NavLink } from 'react-router-dom';
import EditItemForm from '../../../sellerPages/inventory/EditItemForm';

function SearchResults({ data, filter }) {
  const [visible, setVisible] = useState(false);
  const [fields, setFields] = useState([]);

  const searchData = useSearch(data, 'item_name', filter);

  const onEditButtonClick = item => {
    setVisible(true);
    console.log('item', item);
    setFields([
      {
        name: ['item_name'],
        value: item.item_name,
      },
      {
        name: ['description'],
        value: item.description,
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

  const onSubmit = () => {
    setVisible(false);
  };

  return (
    <div>
      {searchData.map(item => (
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
              image={item.id}
            />
          </NavLink>
        </div>
      ))}
      <EditItemForm
        fields={fields}
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
}

export default SearchResults;
