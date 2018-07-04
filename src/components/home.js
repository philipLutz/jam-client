import React from 'react';
import './home.css';
import Navigation from './navigation';
import JamEvent from './jam-event';
import AddJam from './add-jam';

export default function Home(props) {
	return (
		<div>
			<Navigation />
			<JamEvent />
			<AddJam />
		</div>
	);
}