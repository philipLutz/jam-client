import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteJam } from '../../actions/jams';

export function HostEvent({
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
	let peopleInterestedRaw = attendees.toString();
	let peopleInterested = peopleInterestedRaw.replace(/,/g, ", ");
	return (
		<section className="jam-results">
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
					<li className="attendees">
						<div><i><b>People Interested:</b></i></div>
						<div>{peopleInterested}</div>
					</li>
				</ul>
				<button
					className="delete-jam-button"
					onClick={() => {
						dispatch(deleteJam(_id))
					}}
				>Delete Jam</button>
			</div>
		</section>
	);
}

export default connect()(HostEvent);
