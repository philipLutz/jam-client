import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { newJam } from '../../actions/jams'

import './AddJamForm-style.css'


export class AddJamForm extends React.Component {

  onSubmit(values) {
    this.props.dispatch(newJam(values));
  }

  render() {

    return (
      <div>
           <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <label htmlFor="jamDate">Date</label>
            <Field name="jamDate" id="jamDate" type="text" component="input" />
            <label htmlFor="jamTime">Time</label>
            <Field name="jamTime" id="jamTime" type="text" component="input" />
            <label htmlFor="style">Style</label>
            <Field name="style" id="style" type="text" component="input" />
            <label htmlFor="location">Location</label>
            <Field name="location" id="location" type="text" component="input" />
            <label htmlFor="instruments">Instruments</label>
            <Field name="instruments" id="instruments" type="text" component="input" />
            <button
                type="submit"
                disabled={
                    this.props.pristine ||
                    this.props.submitting
                }>
                Create Jam
            </button>
          </form>
      </div>
    )
  }
}

export default reduxForm({form: 'addJam'})(AddJamForm);