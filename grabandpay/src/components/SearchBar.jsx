import React, { useState } from 'react';
import Search from './Search';
import Scroll from './Scroll';
import { BsSearch } from 'react-icons/bs';
function SearchBar({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredSupermarkets = details.filter(
    supermarket => {
      return (
        supermarket
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function SearchList(){
    return (
      <Scroll>
        <Search filteredSupermarkets={filteredSupermarkets} />
      </Scroll>
    )
  }

  return (
    <section>
      <div>
        <input 
          className="searchBar"
          type = "search" 
          placeholder = "Search Supermarket" 
          onChange = {handleChange}
        />
        <div className='searchIcon'><BsSearch /></div>
      </div>
      {SearchList()}
    </section>
  );
}

export default SearchBar;