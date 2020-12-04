import React, { useEffect } from 'react';
import ItemCard from '../../../common/cards/normalItem';
import { connect } from 'react-redux';
import { fetchProducts } from '../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';

function SearchResults({ inventory }) {
  const { authState } = useOktaAuth();
  useEffect(() => {
    fetchProducts(authState);
  }, []);

  return (
    <div>
      {inventory.map(item => (
        <ItemCard
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  inventory: state.products.products,
  getProductsStatus: state.products.getProductsStatus,
});

export default connect(mapStateToProps, { fetchProducts })(SearchResults);
