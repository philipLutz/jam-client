import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './FeaturesSection-style.css';

export default class FeaturesSection extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'features'}>
				<section className="features-section">
					<h2 className="title">Features</h2>
					<div className="features-container">
						<ul>
							<li>Find Jam Sessions</li>
							<li>Host Your Own Events</li>
							<li>Keep Track of Your Schedule</li>
						</ul>
					</div>
					<div className="button-container">
						<a href='#about' className="about-button">About</a>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
}