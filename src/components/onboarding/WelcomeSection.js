import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './WelcomeSection-style';

export class WelcomeSection extends React.Component {
	render() {
		let buttons =(
			<div className="button-container">
				<Link className="nav-item" to="/login">
					<button className="login-button">Login</button>
				</Link>
				<a href='#features' className="learn-more-button">Learn More</a>
			</div>
		)
		if (this.props.loggedIn){

		}
		let dialog='Looking to jam?';
		if (this.props.loggedIn){

		}
		return (

		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(WelcomeSection);