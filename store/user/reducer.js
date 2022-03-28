import { CUSTOMERDASHBOARD, SET_CREDENTIAL, SET_ERROR, USER, SET_PROFILE } from "./action"

const initialState = {
    data: null,
    userData: null,
    error: null,
    profileData: null,
    customerDashboard: null,
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMERDASHBOARD: return { ...state, customerDashboard: action.data };
        case USER: return { ...state, data: action.data };
        case SET_CREDENTIAL: return { ...state, userData: action.data };
        case SET_ERROR: return { ...state, error: action.data };
        case SET_ERROR: return { ...state, error: action.data };
        case SET_PROFILE: return { ...state, profileData: action.data };
        default: return state;
    }
}
export default UserReducer;

