import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import './BrowserBar.css';

function BrowserBar() {
  const [search, setSearch] = useState({ location: '', item: '' });
  const searchHandle = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    console.log('hi');
  };
  return (
    <Form className="search-bar" onFinish={submitHandler}>
      <div className="location">
        {' '}
        <Input
          prefix={<AimOutlined />}
          name="location"
          value={search.location}
          placeholder="Enter zipcode city/town"
          onChange={searchHandle}
          onSubmit={submitHandler}
        />
      </div>

      <Input
        name="item"
        value={search.item}
        onChange={searchHandle}
        placeholder="What are you looking for?"
        onSubmit={submitHandler}
      />
      <Button htmlType="submit">
        <SearchOutlined />
      </Button>
    </Form>
  );
}

export default BrowserBar;
