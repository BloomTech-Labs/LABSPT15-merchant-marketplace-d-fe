import React, { useEffect, useState } from 'react';
import { Input, Button, Select } from 'antd';
import './searchbarStyles.css';

function SearchBar({ searchVisible }) {
  const [inView, setInView] = useState('nope');
  const { Search } = Input;
  const { Option } = Select;

  useEffect(() => {
    if (searchVisible === true) {
      setInView('inView');
    }
  });

  return (
    <div className={inView}>
      <div className="searchOuter">
        <Search className="searchBar" />
        <div>
          <Option>Sort By</Option>
          <Option>Catagory</Option>
        </div>
        <div>
          <Button className="searchButton">Manage</Button>
          <Button className="searchButton">+ Add Item</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
