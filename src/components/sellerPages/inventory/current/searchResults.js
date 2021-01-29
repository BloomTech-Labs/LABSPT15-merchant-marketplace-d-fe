import React from 'react';
import ItemCard from '../../../common/cards/normalItem';
import useSearch from '../../../common/customHooks/useSearch';
import { NavLink } from 'react-router-dom';
function SearchResults({ data, filter }) {
  const searchData = useSearch(data, 'item_name', filter);
  return (
    <div>
      {searchData.map(item => (
        <NavLink to={`/myprofile/inventory/productpage/${item.id}`}>
          <ItemCard
            id={item.id}
            key={item.id}
            name={item.item_name}
            price={item.price_in_cents}
            description={item.description}
            count={item.quantity_available}
            image={item.id}
          />
        </NavLink>
      ))}
    </div>
  );
}

export default SearchResults;
