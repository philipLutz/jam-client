import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';

import { registerUser } from '../../actions/users';
import { login } from '../../actions/auth';
import LoginInput from '../../commons/login-input';
import { required, nonEmpty, matches, length, isTrimmed } from '../../validators';

import './signup-form-style.css';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName, bio, email } = values;
        const user = { username, password, firstName, lastName, bio, email };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h1 className="page-title">Signup</h1>
                <label className="labels" htmlFor="firstName">First name</label>
                <Field className="fields" component={LoginInput} type="text" name="firstName" />
                <label className="labels" htmlFor="lastName">Last name</label>
                <Field className="fields" component={LoginInput} type="text" name="lastName" />
                <label className="labels" htmlFor="bio">Bio</label>
                <Field className="fields" component={LoginInput} type="text" name="bio" />
                <label className="labels" htmlFor="email">Email</label>
                <Field className="fields" component={LoginInput} type="email" name="email" />
                <label className="labels" htmlFor="username">Username</label>
                <Field
                    className="fields"
                    component={LoginInput}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label className="labels" htmlFor="password">Password</label>
                <Field
                    className="fields"
                    component={LoginInput}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label className="labels" htmlFor="passwordConfirm">Confirm Password</label>
                <Field
                    className="fields"
                    component={LoginInput}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <div>
                    <button className="signup-form-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
                </div>
                <div>
                    <span className="login-signup-span">Already have an account?&nbsp;&nbsp;
                        <Link to="/login" className="register-link">Login</Link>
                    </span>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);