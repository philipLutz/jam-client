import React from 'react';
import { connect } from 'react-redux';
import { getAttendJams } from '../../actions/jams';
import AttendEvent from './AttendEvent';

export class AttendBoard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: props.loggedIn.username
		}
	}

	componentDidMount(props) {
		this.props.dispatch(getAttendJams(this.state.username));
	}
	render() {
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
		if (this.props.empty === true || this.props.jams.length === 0) {
			return (
				<div className="empty">
					<div>You are not attending any Jams</div>
				</div>
			)
		}
		else {
			return (
				<section className="attend-board">
					{this.props.jams.map(jam => (
						<AttendEvent
							{...jam}
							dispatch={this.props.dispatch}
							props={this.props}
							key={String(jam._id)}
						/>
					))}
				</section>
			);
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

export default connect(mapStateToProps)(AttendBoard);