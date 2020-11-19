import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../../common/cards/ItemCards';
import NavBar from '../../common/navBar';

function CurrentInventory(props) {
  return (
    <>
      <NavBar />
      <div className="outerContainer">
        <div className="contents">
          <ItemCard
            name="testname"
            description="test description text"
            price="3.33"
          />
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CurrentInventory;
