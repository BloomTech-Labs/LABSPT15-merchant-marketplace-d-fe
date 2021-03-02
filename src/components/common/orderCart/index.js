import { Badge, Button, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './orderCart.css';
import DropDownComponent from './dropDownComponent';

function OrderCart() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const data = [
    {
      item: 'Item 1',
      price: 21112,
    },
    {
      item: 'Item 2',
      price: 21112,
    },
    {
      item: 'item 3',
      price: 21112,
    },
  ];
  return (
    <div>
      <Dropdown
        overlay={<DropDownComponent data={data} />}
        onVisibleChange={setDropdownVisible}
        visible={dropdownVisible}
        placement="bottomRight"
      >
        <Badge count={data.length} offset={[-5, 5]} size="small">
          <Button
            className="orderCart"
            type="link"
            size="large"
            icon={<ShoppingCartOutlined />}
          />
        </Badge>
      </Dropdown>
    </div>
  );
}

export default OrderCart;
