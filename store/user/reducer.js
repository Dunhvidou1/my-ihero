import { SET_ORDERDATA, SETAFFLIATEDATA, SEARCHDATA, CUSTOMERDASHBOARD, SET_CREDENTIAL, SET_ERROR, USER, SET_PROFILE } from "./action"

const initialState = {
    data: null,
    userData: null,
    error: null,
    profileData: null,
    customerDashboard: null,
    searchData: null,
    AffliateData: [],
    OrderData: [],
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERDATA: return { ...state, OrderData: action.data };
        case SETAFFLIATEDATA: return { ...state, AffliateData: action.data };
        case SEARCHDATA: return { ...state, searchData: action.data };
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

