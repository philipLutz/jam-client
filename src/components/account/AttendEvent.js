import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { editJam } from '../../actions/jams';

import './AttendEvent-style.css';

export function AttendEvent({
	userHost,
	jamDate,
	jamTime,
	style,
	location,
	instruments,
	attendees,
	_id,
	dispatch,
	props
}) {
	return (
		<section className="jam-results">
			<div className="jam-container">
				<h3 className="style">{style}</h3>
				<ul className="jam-time">
					<li><Moment format="MMMM-D-YYYY">{jamDate}</Moment></li>
					<li>{jamTime}</li>
					<li>{location}</li>
					<li>{instruments}</li>
				</ul>
				<button
					className="attend-jam"
					onClick={() => {
						const attendJamObj = {
							userHost,
							jamDate,
							jamTime,
							style,
							location,
							instruments,
							attendees: props.loggedIn.username
						}
						console.log(_id);
						dispatch(editJam(_id, attendJamObj))
					}}
				>Attend Jam</button>
			</div>
		</section>
	);
}

export default connect()(AttendEvent);