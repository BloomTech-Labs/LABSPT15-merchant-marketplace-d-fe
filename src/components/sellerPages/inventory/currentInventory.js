import React from 'react';
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
      </div>
    </div>
  );
}

export default CurrentInventory;
