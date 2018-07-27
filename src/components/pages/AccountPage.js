import React from 'react';
import { connect } from 'react-redux';
import './AccountPage-style.css';
import AttendBoard from '../account/AttendBoard';
import HostBoard from '../account/HostBoard';

export class AccountPage extends React.Component {
	render() {
		if (this.props.loggedIn) {
			return (
				<div className="account-page">
					<section className="host-section">
						<h3>Hosted Jams</h3>
						<HostBoard />
					</section>
					<section className="attend-section">
						<h3>Interesting Jams</h3>
						<AttendBoard />
					</section>
				</div>
			);
		}
		else {
			return (
				<div className="board-page">
					<div>Please login to see your account</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	jams: state.jams.jams,
	loading: state.jams.loading,
	error: state.jams.error,
	empty: state.jams.empty,
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(AccountPage);