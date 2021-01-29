import React, { useEffect, useState } from 'react';
import { Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import './searchbarStyles.css';

function SearchBar({ searchVisible, setData }) {
  const [inView, setInView] = useState('nope');
  const { Search } = Input;
  const { Option } = Select;

  function onSearch(values) {
    setData(values);
  }

  function sortChange(value) {
    console.log(`selected sortBy: ${value}`);
  }

  function categoryChange(value) {
    console.log(`selected category: ${value}`);
  }

  useEffect(() => {
    if (searchVisible === false) {
      setInView('inView');
    }
  });

  return (
    <div className={inView}>
      <div className="searchOuter">
        <div className="searchBtns"></div>
        <Search
          placeholder="Search through your inventory"
          className="searchBar"
          onSearch={onSearch}
        />
        <div>
          <Select defaultValue="Sort By" onChange={sortChange}>
            <Option value="cat">Category</Option>
          </Select>
          <Select defaultValue="Category" onChange={categoryChange}>
            <Option value="candy">Candy</Option>
          </Select>
        </div>
        <div>
          <Link to="/myprofile/inventory/additem">
            <Button className="add-item-button">+ Add Item</Button>
          </Link>
        </div>
      </div>
      <div className="searchBtns">
        <Button>Main</Button>
        <Button>Drafts</Button>
        <Button>Archives</Button>
      </div>
    </div>
  );
}

export default SearchBar;
