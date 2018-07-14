import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-redux-dom';
import LoginForm from '../login/login-form';

export function LoginPage(props) {
	if(props.loggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div className="home">
			<LoginForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);