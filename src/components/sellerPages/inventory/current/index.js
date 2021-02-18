import { useOktaAuth } from '@okta/okta-react/src/OktaContext';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { fetchProducts, fetchTags } from '../../../../state/actions';
import { Link } from 'react-router-dom';

import NavBar from '../../../common/navBar';
import SearchResults from './searchResults';
import useSearch from '../../../common/customHooks/useSearch';

function CurrentInventory({ inventory, fetchProducts, fetchTags }) {
  const [searchData, setSearchData] = useState({});
  const { authState } = useOktaAuth();

  useEffect(() => {
    fetchProducts(authState);
  }, []);

  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />
      <div className="outerContainer">
        <div className="contents">
          <SearchResults data={inventory} filter={searchData} />
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
        </div>
      </div>
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
