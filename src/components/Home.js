import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
    
class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Recommendations</h1>
        <div className='home-btns'>
          <Link to='/search'>
            <button>SEARCH</button>
          </Link>
          <Link to='/login'>
            <button>LOG IN</button>
          </Link>
        </div>
      </div>
    );
  }
}
    
export default Home;