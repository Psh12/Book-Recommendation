import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
    
class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Recommendations</h1>
        
        {/*<div className='display-container'>
          <HomeDisplay/>
        </div>*/}
        <div className='home-btns-container'>
          <Link to='/search'>
            <button className='home-btns button-a'>SEARCH</button>
          </Link>
          <Link to='/login'>
            <button className='home-btns button-a'>LOG IN</button>
          </Link>
        </div>
      </div>
    );
  }
}
    
export default Home;