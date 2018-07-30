import React from 'react';
import './JamBoard-style.css';
import { connect } from 'react-redux';
import { getJams } from '../../actions/jams';
import JamEvent from './JamEvent';

export class JamBoard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username: props.loggedIn.username,
			jams: props.jams.jams
		}
	}

	componentDidMount() {
		this.props.dispatch(getJams());
	}
	
	render() {
		let newJam = this.props.jams.map((jam) => {
			let jamsArray = [];
			let jamAttendeesArray = [];
			if (jam.attendees !== null) {
				jamsArray.push(jam);
			}
			if (jamsArray.length > 0) {
				jamAttendeesArray.push(jamsArray[0].attendees);
			}
			if (jamAttendeesArray.length > 0) {
				if (jamAttendeesArray[0].indexOf(this.props.loggedIn.username) === -1) {
					return (
						<section className="jam-board"key={String(jam._id)}>
								<JamEvent
									{...jam}
									dispatch={this.props.dispatch}
									props={this.props}
								/>
						</section>
					);
				}	
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
		if (this.props.empty === true || this.props.jams.length === 0) {
			return (
				<div className="empty">
					<div>There are no Jams right now</div>
				</div>
			)
		}
		else {
			
			return (
				<div>
					{newJam}
				</div>
			);
		}
		return (
			<div></div>
		);
	} 
}

const mapStateToProps = state => ({
	jams: state.jams.jams,
	loading: state.jams.loading,
	error: state.jams.error,
	empty: state.jams.empty,
	loggedIn: state.auth.currentUser || ''
});

export default connect(mapStateToProps)(JamBoard);







