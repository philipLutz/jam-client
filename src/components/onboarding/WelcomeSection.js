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
				<img src="https://corandemphotography.files.wordpress.com/2011/01/punchbrothers121210_65.jpg" alt="folk jam" />
				<div className="title-container">
					<h1 className="title">Jam</h1>
				</div>
				<div><h3 className="dialog">{dialog}</h3></div>
				<div className="buttons">{buttons}</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(WelcomeSection);