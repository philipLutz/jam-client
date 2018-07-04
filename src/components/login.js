import React from 'react';
import './login.css';

export default function Login(props) {
	return (
		<form className='login-form'>
            <div>
              <label for="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Login</button>
        </form>
	);
}