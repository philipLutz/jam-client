import React from 'react';
import './add-jam.css';

export default function AddJam(props) {
	return (
		<form className='add-jam-form'>
			<div>
              <label for="location">Location</label>
              <input placeholder='Location' type="text" name='location' id='location' />
            </div>
            <div>
              <label for="time">Time</label>
              <input type="text" name='time' id='time' placeholder='Time' />
            </div>
            <button type='submit'>Add Jam</button>
		</form>
	);
}