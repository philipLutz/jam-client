import {GET_JAM_REQUEST, 
		CLEAR_JAMS, 
		GET_JAMS_SUCCESS, 
		GET_JAM_ERROR, 
		ADD_JAM_SUCCESS, 
		EDIT_JAM_SUCCESS} from '../actions/jams';

const initialState = {
	loading: false,
	error: null,
	jams: [{userHost: null,
			jamDate: null,
			jamTime: null,
			style: null,
			location: null,
			instruments: null,
			attendees: null}],
};

export default function reducer(state=initialState, action) {
	if (action.type === GET_JAMS_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			jams: action.jams
		});
	}
	else if (action.type === CLEAR_JAMS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			jams: [{userHost: null,
					jamDate: null,
					jamTime: null,
					style: null,
					location: null,
					instruments: null,
					attendees: null}]
		});
	}
	else if (action.type === ADD_JAM_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			jams: [...state.jams, action.jam]
		});
	}
	else if (action.type === GET_JAM_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.err,
			jams: []
		});
	}
	else if (action.type === GET_JAM_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
			jams: []
		});
	}
	return state;
}