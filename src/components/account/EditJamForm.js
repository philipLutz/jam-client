import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { editJam } from '../../actions/jams';
import { renderDatePicker } from '../../commons/renderDatePicker';
import './EditJamForm-style.css';

