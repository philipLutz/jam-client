import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
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
		<div className="jam-board">
			<div className="jam-results">
				<div className="jam-container">
					<h5 className="style">{style}</h5>
					<ul>
						<li className="time">
							<div><i><b>When?</b></i></div>
							<div><Moment format="MMMM-D-YYYY">{jamDate}</Moment> at {jamTime}</div>
						</li>
						<li className="location">
							<div><i><b>Where?</b></i></div>
							<div>{location}</div>
						</li>
						<li className="instruments">
							<div><i><b>What to bring?</b></i></div>
							<div>{instruments}</div>
						</li>
						<li className="host">
							<div><i><b>Host:</b></i></div>
							<div>{userHost}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default connect()(AttendEvent);