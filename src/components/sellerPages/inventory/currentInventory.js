import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../common/cards/ItemCards';

function CurrentInventory(props) {
  return (
    <div className="outerContainer">
      <div className="contents">
        <ItemCard
          name="testname"
          description="test description text"
          price="3.33"
        />
        <Link to="/inventory/additem">
          <Button>+Add Item</Button>
        </Link>
      </div>
    </div>
  );
}

export default CurrentInventory;
