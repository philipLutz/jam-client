import React from 'react';
import './HostBoard-style.css';
import { connect } from 'react-redux';
import { getAttendJams } from '../../actions/jams';
import HostEvent from './HostEvent';

export class HostBoard extends React.Component {

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
					<div>You have not created any Jams</div>
				</div>
			)
		}
		if (this.props.jams.userHost === this.props.username) {
			return (
				<section className="jam-board">
					{this.props.jams.map(obj => (
						<HostEvent
							{...obj}
							dispatch={this.props.dispatch}
							props={this.props}
							key={String(obj._id)}
						/>
					))}
				</section>
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