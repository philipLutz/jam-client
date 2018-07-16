import React from 'react';
import { connect } from 'react-redux';
import AboutSection from '../onboarding/AboutSection';
import FeaturesSection from '../onboarding/FeaturesSection';
import WelcomeSection from '../onboarding/WelcomeSection';
import './OnboardingPage-style.css';

export class OnboardingPage extends React.Component {
	render() {
		return (
			<div className="onboarding-page">
				<WelcomeSection />
				<FeaturesSection />
				<AboutSection />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(OnboardingPage);