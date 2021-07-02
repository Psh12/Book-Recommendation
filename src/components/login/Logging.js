import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { Button } from '../Button'
import { Link } from 'react-router-dom';

function Logging() {
  const userTest = {
    name: 'testuser',
    email: 'test@test.com',
    password: 'test123'
  }

  const [user, setUser] = useState({name:'', email:''});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);

    if (details.name === userTest.name && details.email === userTest.email && details.password === userTest.password) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log('User not found');
      setError('User not found');
    }
  }

  const Logout = () => {
    console.log('Logout');
    setUser({
      name: '',
      email: ''
    })
  }

  return (
    <div className="App">
      {(user.email !== '') ? (
        <div className='welcome'>
          <h2><span>{user.name}</span> has logged in</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <>
          <div className="logform">
            <LoginForm Login={Login} error={error}/>
          </div>
          <div className="regis">
            <Link to='/register'>
              <Button className='btns'>REGISTER</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Logging;
