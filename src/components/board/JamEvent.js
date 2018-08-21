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



