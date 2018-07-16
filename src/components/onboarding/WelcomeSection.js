import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './WelcomeSection-style.css';

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
			<section className="welcome">
				<div className="title-container">
					<h1 className="title">Jam</h1>
					<h3 className="sub-title">{dialog}</h3>
				</div>
				<div>{buttons}</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(WelcomeSection);