import React from 'react';
import { connect } from 'react-redux';
// import { Redirect, Link } from 'react-router-dom';
import './AddFormPage-style.css';
import AddJamForm from '../account/AddJamForm';

export class AddFormPage extends React.Component {
	render() {
		if (this.props.loggedIn) {
			return (
				<div className="form-container">
					<AddJamForm />
				</div>
			);
		}
		else {
			return (
				<div className="board-page">
					<div>Please login to host a jam</div>
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

export default connect(mapStateToProps)(AddFormPage);