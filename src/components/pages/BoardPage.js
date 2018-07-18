import React from 'react';
import { connect } from 'react-redux';
import './BoardPage-style.css';
import JamBoard from '../board/JamBoard';

export class BoardPage extends React.Component {
	render() {
		if (this.props.loggedIn) {
			return (
				<div className="board-page">
					<JamBoard />
				</div>
			);
		}
		else {
			return (
				<div className="board-page">
					<div>Please login to see posted Jams</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	jams: state.jams.jams,
	loading: state.jams.loading,
	error: state.jams.error,
	empty: state.jams.empty,
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(BoardPage);