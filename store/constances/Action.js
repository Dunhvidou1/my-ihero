export const SETCONNECT = 'SETCONNECT';
export const SET_LOCATIONY = 'SET_LOCATIONY';
export const SET_LOCATIONX = 'SET_LOCATIONX';
export const SET_THEME_COLOR = 'SET_THEME_COLOR';
export const setColorTheme = (data) => {
	return dispatch => {
		if (data == 'dark') {
			dispatch({ type: SET_THEME_COLOR, data: data });
		} else {
			dispatch({ type: SET_THEME_COLOR, data: data });
		}
	}
}
export const setX = (data) => {
	return dispatch => {
		dispatch({ type: SET_LOCATIONX, data: data });
	}
}
export const setY = (data) => {
	return dispatch => {
		dispatch({ type: SET_LOCATIONY, data: data });
	}
}
export const setConnectData = (data) => {
	return dispatch => {
		dispatch({ type: SETCONNECT, data: data });
	}
}
