import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Table, Image, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { fetchProducts, fetchTags } from '../../../../state/actions';
import { Link } from 'react-router-dom';

import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';

function CurrentInventory({ inventory, fetchProducts }) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);

  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />
      <SearchResults data={inventory} filter={searchData} />
    </>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts, fetchTags })(
  CurrentInventory
);
