import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from '../../commons/login-input';
import { login } from '../../actions/auth';

import { required, nonEmpty } from '../../validators';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password));
	}

	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
				);
		}

		return (
			<form
				className="login-form"
				onSubmit={this.props.handleSubmit(values => 
					this.onSubmit(values)
				)}>
				<h1 className="page-title">Login</h1>
				{error}
				<label htmlFor="username" className="labels">Username</label>
				<Field
					className="fields"
					component={Input}
					type="text"
					name="username"
					id="username"
					validate={[required, nonEmpty]}
				/>
				<label htmlFor="password" className="labels">Password</label>
				<Field
					className="fields"
					component={Input}
					type="password"
					name="password"
					id="password"
					validate={[required, nonEmpty]}
				/>
				<div className="submit-button">
					<button className="login-form-button" disabled={this.props.pristine || this.props.submitting}>
						Login
					</button>
				</div>
				<div className="signup-link">
					<span className="login-signup-span">Need an account?&nbsp;&nbsp;
						<Link to="/signup" className="signup-link">Signup</Link>
					</span>
				</div>
				<div className="demo-account">
					<h5>Demo Account</h5>
					<div>
						<span>Username: TestUser</span>
					</div>
					<div>
						<span>Password: 1234512345</span>
					</div>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);

