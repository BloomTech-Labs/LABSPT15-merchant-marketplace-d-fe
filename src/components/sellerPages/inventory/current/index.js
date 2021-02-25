import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Table, Image, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  fetchProducts,
  fetchTags,
  deleteProduct,
} from '../../../../state/actions';
import { Link } from 'react-router-dom';

import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';

function CurrentInventory({ inventory, fetchProducts, deleteProduct }) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);

  const onDeleteButtonClick = async itemId => {
    await deleteProduct(authState, itemId);

    fetchProducts(authState);
  };

  return (
    <>
      <Link to="/myprofile/inventory/additem">
        <Button className="add-item-button" style={{ margin: '70px 0 0 5%' }}>
          + Add Item
        </Button>
      </Link>
      <NavBar searchVisible={false} setData={setSearchData} />
      <SearchResults
        data={inventory}
        filter={searchData}
        onDeleteButtonClick={onDeleteButtonClick}
      />
    </>
  );
}
const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchTags,
  deleteProduct,
})(CurrentInventory);
