import React from 'react';
import { MdSearch } from 'react-icons/md';

export const Search = ({ handleSearchNote}) => {
  return (
    <div className='search'>
        <MdSearch className = "search-icons" size = '1.3em'></MdSearch>
        <input 
        onChange = {(event)=> 
          handleSearchNote(event.target.value) }
           type='text' placeholder = 'search'/>
        </div>
  )
}
export default Search;