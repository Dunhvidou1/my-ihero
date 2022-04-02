import { FORGOTEMAIL, FIRSTNAME, LASTNAME, EMAIL, PHONE, GENDER, PASSWORD } from "./action";
const initialState = {
    regisFirstname: null,
    regisLastname: null,
    regisEmail: null,
    regisGender: 0,
    regisPhone: null,
    regisPassword: null,
    forgotEmail: null,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOTEMAIL: return { ...state, forgotEmail: action.data };
        case FIRSTNAME: return { ...state, regisFirstname: action.data };
        case LASTNAME: return { ...state, regisLastname: action.data };
        case EMAIL: return { ...state, regisEmail: action.data };
        case PHONE: return { ...state, regisPhone: action.data };
        case GENDER: return { ...state, regisGender: action.data };
        case PASSWORD: return { ...state, regisPassword: action.data };
        default: return state;
    }
}
export default authReducer;