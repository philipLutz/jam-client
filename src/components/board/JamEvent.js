import React from 'react';
import { connect } from 'react-redux';
import { storeCurrentJam } from '../../actions/jams';
import { getJamsSuccess } from '../../actions/jams';
import { editJam } from '../../actions/jams';
import { Link } from 'react-router-dom';

export function JamEvent({
	userHost,
	jamDate,
	jamTime,
	style,
	location,
	instruments,
	attendees,
	id,
	dispatch,
	props
}) {
	return (
		<section className="jam-results">
			<div className="jam-container">
				<h3 className="style">{style}</h3>
				<ul className="jam-time">
					<li>{jamDate}</li>
					<li>{jamTime}</li>
				</ul>
				<Link to='/jam-about'>
					<button 
						className="jam-details"
						onClick={() => {
							const currentJamObj = {
								userHost,
								jamDate,
								jamTime,
								style,
								location,
								instruments,
								attendees,
								id
							}
							dispatch(storeCurrentJam(currentJamObj))
						}}
					>Details</button>
				</Link>
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
							attendees: props.currentUser.username
						}
						dispatch(editJam(this.props.jams.id, attendJamObj))
					}}
				>Attend Jam</button>
			</div>
		</section>
	);
}

export default connect()(JamEvent);



