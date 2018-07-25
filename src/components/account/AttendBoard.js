import React from 'react';
import './AttendBoard-style.css';
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
					<div>There are no Jams right now</div>
				</div>
			)
		}
		else {
			// console.log(this.props);
			return (
				<section className="jam-board">
					{this.props.jams.map(obj => (
						<AttendEvent
							{...obj}
							dispatch={this.props.dispatch}
							props={this.props}
							key={String(obj._id)}
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