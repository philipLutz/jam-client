import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { newJam } from '../../actions/jams';
import { renderDatePicker } from '../../commons/renderDatePicker';
import './AddJamForm-style.css'


export class AddJamForm extends React.Component {

  onSubmit(values) {
    this.props.dispatch(newJam(values))
  }

  render() {

    return (
      <section className="add-jam-form">
          <h3>Host a Jam</h3>
           <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
            <div>
              <label className="labels" htmlFor="style">Style</label>
            </div>
            <div>
              <Field className="fields" name="style" id="style" type="text" component="input" />
            </div>
            <div>
              <label className="labels" htmlFor="location">Location</label>
            </div>
            <div>
              <Field className="fields" name="location" id="location" type="text" component="input" />
            </div>
            <div>
              <label className="labels" htmlFor="instruments">Instruments</label>
            </div>
            <div>
              <Field className="fields" name="instruments" id="instruments" type="text" component="input" />
            </div>
            <div>
              <label className="labels" htmlFor="jamTime">Time</label>
            </div>
            <div>
              <Field className="fields" name="jamTime" id="jamTime" type="text" component="input" />
            </div>
            <div>
              <label className="labels" htmlFor="jamDate">Date</label>
            </div>
            <div>
              <Field className="fields" name="jamDate" id="jamDate" type="text" component={renderDatePicker} />
            </div>
            <button
                type="submit"
                disabled={
                    this.props.pristine ||
                    this.props.submitting
                }>
                Create Jam
            </button>
          </form>
      </section>
    )
  }
}

export default reduxForm({form: 'addJam'})(AddJamForm);