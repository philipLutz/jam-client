import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { editJam } from '../../actions/jams';
import { deleteJam } from '../../actions/jams';
import './HostEvent-style.css';

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
					className="edit-jam-button"
				>Edit Jam</button>
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