import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth-reducer';
import jamsReducer from './reducers/jams-reducer';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		jams: jamsReducer
	}),
	composeWithDevTools(),
	applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
};

export default store;
