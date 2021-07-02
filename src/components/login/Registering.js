import React from 'react';
import RegisterForm from './RegisterForm';
import { Button } from '../Button'
import { Link } from 'react-router-dom';

function Registering() {
  const userTest = {
    name: '',
    email: '',
    password: ''
  }

  const Register = details => {
    console.log(details);

    userTest.name = details.name;
    userTest.email = details.email;
    userTest.password = details.password;
    
    console.log(userTest)
  }

  return (
    <div className="App">
      <>
        <div className="regisform">
          <RegisterForm Register={Register}/>
        </div>
        <div className="log">
          <Link to='/login'>
            <Button className='btns'>LOGIN</Button>
          </Link>
        </div>
      </>
    </div>
  );
}

export default Registering;
