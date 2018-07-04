import React from 'react';
import './landing.css';
import About from './about';
import CreateAccount from './create-account';
import Login from './login';

export default function Landing(props) {
	return (
		<div>
			<About />
			<CreateAccount />
			<Login />
		</div>
	);
}