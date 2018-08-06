import React from 'react';
import './navigation.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { clearJams } from '../../actions/jams';

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
		let addFormButton;
		let jamButton;

		if (this.props.loggedIn) {
			logOutButton = (
				<button className="logout-button" onClick={() => this.logout()}>
					<Link to="/home">Log Out</Link>
				</button>
			);
			accountButton = (
				<button><Link to="/account">Account</Link></button>
			);
			addFormButton = (
				<button><Link to="/addForm">Host a Jam</Link></button>
			);
			jamButton = (
				<div className="logo"><Link className="logo" to="/board">Jam</Link></div>
			);
		} else {
			jamButton = (
				<div className="logo"><Link className="logo" to="/home">Jam</Link></div>
			);
			loginButton = (
				<button><Link to="/login">Login</Link></button>
			);
			signupButton = (
				<button><Link to="/signup">Sign Up</Link></button>
			);
		}

		return (
			<React.Fragment>
				<header className="navbar">
					<nav className="navigation">
						{jamButton}
						<div className="navigation-items">
							<ul>
								{accountButton}
								{addFormButton}
								{loginButton}
								{signupButton}
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

