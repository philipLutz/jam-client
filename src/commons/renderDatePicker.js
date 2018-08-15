import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const renderDatePicker = (props) => {
    return (
        <DatePicker
            selected={props.input.value || null}
            onChange={props.input.onChange}
            popperPlacement="bottom-start"
        />
    )
}