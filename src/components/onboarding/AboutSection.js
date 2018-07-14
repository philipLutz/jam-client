import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './AboutSection-style';

export default class AboutSection extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'about'}>
				<section className="about-section">
					<h2 className="title">About</h2>
					<div className="about-content">
						Looking to play some music?  Jam is the simplest way to connect with other musicians and find when and where the jam sessions are happening.  Just like a bulletin board at your local cafe, Jam is easy to use and conveniently lets you know what's going on.  
					</div>
					<div className="button-container">
						<a href='#top' className="top-button">Scroll to Top</a>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
}