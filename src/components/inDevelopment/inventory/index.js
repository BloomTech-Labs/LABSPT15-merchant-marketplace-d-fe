import React from 'react';
import { Button } from 'antd';
import ItemCard from '../../common/cards/ItemCards';
// Styles will be moved elsewhere; these could be reused.
import './inventoryStyles.css';
import { useHistory } from 'react-router-dom';

function Inventory(props) {
  const history = useHistory();

  return (
    <div className="contents">
      <ItemCard />
      <Button
        onClick={() => {
          history.push('inventory/newitem');
        }}
      >
        +Add Item
      </Button>
    </div>
  );
}

export default Inventory;
