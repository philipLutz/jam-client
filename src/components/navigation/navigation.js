import React from 'react';
import './navigation.css';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { clearJams } from '../../actionsjams';

export class Navbar extends React.Component {
	logout() {
		this.props.dispatch(clearAuth());
		this.props.dispatch(clearJams());
		clearAuthToken();
	}
	render() {
		let logOutButton;
		let accountButton;
		let loginButton;
		let signupButton;

		if (this.props.loggedIn) {
			logOutButton = (
				<a className="logout-button" onClick={() => this.logOut()}>Log Out</a>
			);
			accountButton = (
				<li><Link to="/account">Account</Link></li>
			);
		} else {
			loginButton = (
				<li><Link to="/login">Login</Link></li>
			);
			signupButton = (
				<li><Link to="/signup">Sign Up</Link></li>
			);
		}

		return (
			<React.Fragment>
				<header className="navbar">
					<nav className="navigation">
						<div className="logo"><Link className="logo" to="/">Jam</Link></div>
						<div className="navigation-items">
							<ul>
								{accountButton}
								{loginButton}
								{signupButton}
								{!this.props.loggedIn ? <Redirect to="/" /> : ''}
								{logOutButton}
							</ul>
						</div>
					</nav>
				</header>
			</React.Fragment>

		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);

