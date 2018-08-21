import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './FeaturesSection-style.css';

export default class FeaturesSection extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'features'}>
				<section className="features-section">
					<h4 className="title-features">Features</h4>
					<img src="https://s3.amazonaws.com/allaboutjazz/media/large/7/c/1/39b5449acb3c5b7303fd418e76d00.jpg" alt="jazz jam" />
					<div className="features-container">
						<ul>
							<li>Find Jam Sessions</li>
							<li>Host Your Own Events</li>
							<li>Keep Track of Your Schedule</li>
							<li><b><a href='#about' className="about-button">About</a></b></li>
						</ul>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
}