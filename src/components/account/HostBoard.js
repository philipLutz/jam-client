import React from 'react';
import { connect } from 'react-redux';
import { getAttendJams } from '../../actions/jams';
import HostEvent from './HostEvent';

export class HostBoard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: props.loggedIn.username,
			jams: props.jams.jams
		}
	}

	componentDidMount(props) {
		this.props.dispatch(getAttendJams(this.state.username));
	}
	render() {
		let userHostEvents = this.props.jams.map((jam) => {
			if (jam.userHost === this.props.loggedIn.username) {
				return (
					<section className="jam-board" key={String(jam._id)}>
						<HostEvent
							{...jam}
							dispatch={this.props.dispatch}
							props={this.props}
						/>
					</section>
				);
			}
		})
		if (this.props.loading) {
			return (
				<div className="loading">
					<div>Loading Jams...</div>
				</div>
			)
		};
		if (this.props.error) {
			return (
				<div className="error">
					<div>Error loading Jams</div>
				</div>
			)
		};
		if (this.props.empty || this.props.jams.length === 0) {
			return (
				<div className="empty">
					<div>You have not created any Jams</div>
				</div>
			)
		}
		else {
			return (
				<div>
					{userHostEvents}
				</div>
			)
		}
	} 
}

const mapStateToProps = state => ({
	jams: state.jams.jams,
	loading: state.jams.loading,
	error: state.jams.error,
	empty: state.jams.empty,
	loggedIn: state.auth.currentUser || ''
});

export default connect(mapStateToProps)(HostBoard);