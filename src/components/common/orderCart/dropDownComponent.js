import { List } from 'antd';
import React, { useEffect, useState } from 'react';

function DropDownComponent({ data }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    data.forEach(element => {
      total += element.price / 100;
    });
    setTotalPrice(total);
  }, [data]);
  return (
    <List
      className="dropdown"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.item}</a>}
          />
          <div>${item.price / 100}</div>
        </List.Item>
      )}
    >
      <List.Item className="total">
        <List.Item.Meta title={'Total'} />
        {}
        <div>${totalPrice}</div>
      </List.Item>
    </List>
  );
}

export default DropDownComponent;
