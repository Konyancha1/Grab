import React from 'react';
import Market from './Market';

function Search({ filteredSupermarkets }) {
  const filtered = filteredSupermarkets.map(supermarket =>  <Market key={supermarket.id} supermarket={supermarket} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default Search;