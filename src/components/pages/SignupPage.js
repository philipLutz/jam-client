import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SignupForm from '../signup/signup-form';
import './SignupPage-style.css';

export function SignupPage(props) {
	if (props.loggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<div className="signup-page">
			<SignupForm />
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);