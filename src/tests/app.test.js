import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import App from '../components/app.js';
import Navbar from '../components/navigation/navigation.js';
import LoginPage from '../components/pages/LoginPage';
import AccountPage from '../components/pages/AccountPage';
import OnboardingPage from '../components/pages/OnboardingPage';
import SignupPage from '../components/pages/SignupPage';
import BoardPage from '../components/pages/BoardPage';
import AddFormPage from '../components/pages/AddFormPage';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it('renders the Navbar without crashing', () => {
		shallow(<Provider><Navbar /></Provider>);
	});
	it('renders the LoginPage without crashing', () => {
		shallow(<Provider><LoginPage /></Provider>);
	});
	it('renders the AccountPage without crashing', () => {
		shallow(<Provider><AccountPage /></Provider>);
	});
	it('renders the OnboardingPage without crashing', () => {
		shallow(<Provider><OnboardingPage /></Provider>);
	});
	it('renders the SignupPage without crashing', () => {
		shallow(<Provider><SignupPage /></Provider>);
	});
	it('renders the BoardPage without crashing', () => {
		shallow(<Provider><BoardPage /></Provider>);
	});
	it('renders the AddFormPage without crashing', () => {
		shallow(<Provider><AddFormPage /></Provider>);
	});
});
