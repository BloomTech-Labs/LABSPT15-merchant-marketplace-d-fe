import React from 'react';
import { Button } from 'antd';
import ItemCard from '../../common/cards/ItemCards';
// Styles will be moved elsewhere; these could be reused.
import './inventoryStyles.css';
import { useHistory } from 'react-router-dom';

function Inventory(props) {
  const history = useHistory();

  return (
    <div className="outerContainer">
      <div className="contents">
        <ItemCard
          name="testname"
          description="test description text"
          price="3.33"
        />
        <Button
          onClick={() => {
            history.push('inventory/newitem');
          }}
        >
          +Add Item
        </Button>
      </div>
    </div>
  );
}

export default Inventory;
