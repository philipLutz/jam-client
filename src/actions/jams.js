import {API_BASE_URL} from '../config';

export const GET_JAM_REQUEST = 'GET_JAM_REQUEST';
export const getJamRequest = () => {
	return {
		type: GET_JAM_REQUEST
	};
};

export const CLEAR_JAMS = 'CLEAR_JAMS';
export const clearJams = () => {
	return {
		type: CLEAR_JAMS
	};
};

export const GET_JAMS_SUCCESS = 'GET_JAMS_SUCCESS';
export const getJamsSuccess = (jams) => {
	return {
		type: GET_JAMS_SUCCESS,
		jams
	};
};

export const GET_JAM_ERROR = 'GET_JAM_ERROR';
export const getJamError = (err) => {
	return {
		type: GET_JAM_ERROR,
		err
	};
};

export const ADD_JAM_SUCCESS = 'ADD_JAM_SUCCESS';
export const addJamSuccess = (jam) => {
	return {
		type: ADD_JAM_SUCCESS,
		jam
	};
};

export const EDIT_JAM_SUCCESS = 'EDIT_JAM_SUCCESS';
export const editJamSuccess = (jam) => {
	return {
		type: EDIT_JAM_SUCCESS,
		jam
	};
};

export const getJams = () => (dispatch, getState) => {
	dispatch(getJamRequest)
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/jams`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => {
		return res.json();
	})
		.then(jams => {
			dispatch(clearJams())
			return dispatch(getJamsSuccess(jams))
		})
		.catch(err => dispatch(getJamError(err.message)));
};

export const getAttendJams = (username) => (dispatch, getState) => {
	dispatch(getJamRequest)
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/jams/${username}`, {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => {
		return res.json();
	})
		.then(jams => {
			dispatch(clearJams())
			return dispatch(getJamsSuccess(jams))
		})
		.catch(err => dispatch(getJamError(err.message)));
};

// export const getSpecificJams = (id) => (dispatch, getState) => {
// 	dispatch(getJamRequest)
// 	const authToken = getState().auth.authToken;
// 	return fetch(`${API_BASE_URL}/jams/${id}`, {
// 		method: 'GET',
// 		headers: {
// 			'content-type': 'application/json',
// 			Authorization: `Bearer ${authToken}`
// 		}
// 	})
// 		.then(res => {
// 		return res.json();
// 	})
// 		.then(jam => {
// 			dispatch(clearJams())
// 			return dispatch(getJamsSuccess(jam))
// 		})
// 		.catch(err => dispatch(getJamError(err.message)));
// };

export const newJam = (newJamObject) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/jams`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		},
		body: JSON.stringify(newJamObject)
	})
		.then(res => {
			return res.json();
		})
		.then(jam => {
			dispatch(addJamSuccess(jam))
			window.location = '/account';
		})
		.catch(err => dispatch(getJamError(err.message)));
};

export const editJam = (id, editJamObject) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/jams/${id}`, {
		method: 'PUT',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		},
		body: JSON.stringify(editJamObject)
	})
		.then(res => {
			return res.json();
		})
		.then(() => {
			window.location = '/board';
		})
		.catch(err => dispatch(getJamError(err.message)));
}

export const deleteJam = (id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/jams/${id}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(() => {
			return dispatch(getJams());
		})
		.catch(err => dispatch(getJamError(err.message)));
};








