import React from 'react'
import { Button } from './Button'
import './Search.css'
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div className='search-background'>
      <div className='search-container'>
        <h1>Search</h1>
        <p>Switch to checkbox search</p>
          <Link to='/toggle'>
            <Button className='btns'>CHECKBOX</Button>
          </Link>
        <div> </div>
        <div className='search-btns'>
          <Link to='/search'>
            <Button className='btns'>SEARCH</Button>
          </Link>
          <input id='inputbox' type='text' placeholder='Enter a book title' />
        </div>
      </div>
    </div>
  );
}

export default Search;
