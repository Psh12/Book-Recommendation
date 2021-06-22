import React from 'react'
import { Button } from './Button'
import './Toggle.css'
import { Link } from 'react-router-dom';

function Toggle() {
  return (
    <div className='toggle-background'>
      <div className='toggle-container'>
        <h1>Toggle</h1>
        <p>Return to normal search</p>
          <Link to='/search'>
            <Button className='btns'>RETURN</Button>
          </Link>
        <div> </div>
        <br></br>
        <div className='toggle-btn'>
          <label class="container">
            <input type="checkbox"></input>
            <span class="checkmark"></span>Test
          </label>
          <label class="container">
             <input type="checkbox"></input>
             <span class="checkmark"></span>Test2
          </label>
          <label class="container">
             <input type="checkbox"></input>
             <span class="checkmark"></span>Test3
          </label>
        </div>
        <div> </div>
        <br></br>
        <div className='toggle-btn'>
           <Link to='/toggle'>
              <Button className='btns'>SEARCH</Button>
           </Link>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
