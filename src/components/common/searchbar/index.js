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
        <Search
          defaultValue="Search through your inventory"
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
            <Button className="searchButton">+ Add Item</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
