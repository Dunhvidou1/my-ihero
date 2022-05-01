import * as api from "../../api/Index"
export const EMAIL = 'EMAIL';
export const PHONE = 'PHONE';
export const GENDER = 'GENDER';
export const FIRSTNAME = 'FIRSTNAME';
export const LASTNAME = 'LASTNAME';
export const PASSWORD = 'PASSWORD';
export const FORGOTEMAIL = 'FORGOTEMAIL';
export const setForgotPass = (data) => {
    return dispatch => {
        dispatch({ type: FORGOTEMAIL, data: data });
    }
}
export const setFirstname = (data) => {
    return dispatch => {
        dispatch({ type: FIRSTNAME, data: data });
    }
}
export const setLastname = (data) => {
    return dispatch => {
        dispatch({ type: LASTNAME, data: data });
    }
}
export const setEmail = (data) => {
    return dispatch => {
        dispatch({ type: EMAIL, data: data });
    }
}
export const setPhone = (data) => {
    return dispatch => {
        dispatch({ type: PHONE, data: data });
    }
}
export const setGender = (data) => {
    return dispatch => {
        dispatch({ type: GENDER, data: data });
    }
}
export const setPassword = (data) => {
    return dispatch => {
        dispatch({ type: PASSWORD, data: data });
    }
} 
