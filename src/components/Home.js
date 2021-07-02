import React from 'react'
import { Button } from './Button'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1>Recommendations</h1>
      <div className='home-btns'>
      <Link to='/search'>
        <Button className='btns'>SEARCH</Button>
      </Link>
      <Link to='/login'>
        <Button className='btns'>LOG IN</Button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
