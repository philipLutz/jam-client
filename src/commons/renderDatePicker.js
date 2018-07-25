import React from 'react';
import DatePicker from 'react-datepicker';

export const renderDatePicker = (props) => {
    return (
        <DatePicker
            selected={props.input.value || null}
            onChange={props.input.onChange}
        />
    )
}