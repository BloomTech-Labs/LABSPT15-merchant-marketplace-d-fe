import React from 'react';
import ItemCard from '../../../common/cards/normalItem';
import useSearch from '../../../common/customHooks/useSearch';

function SearchResults({ data, filter }) {
  const searchData = useSearch(data, 'name', filter);

  return (
    <div>
      {searchData.map(item => (
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

export default SearchResults;
