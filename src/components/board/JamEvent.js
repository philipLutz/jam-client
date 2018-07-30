import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editJam } from '../../actions/jams';
import Moment from 'react-moment';
import './JamEvent-style.css';

export function JamEvent({
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
						dispatch(editJam(_id, attendJamObj))
					}}
				><Link to="/account">Interested?</Link></button>
			</div>
		</section>
	);
}

export default connect()(JamEvent);



