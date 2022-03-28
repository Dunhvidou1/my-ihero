import {
    SETCONNECT,
    SET_LOCATIONX,
    SET_LOCATIONY,
    SET_THEME_COLOR,
} from "./Action";
const initialState = {
    locationX: 0,
    locationY: 0,
    gold: '#FBD336',
    bgTab: '#033156',
    textGray: "gray",
    bgLight: '#ffffff',
    textLight: "#ffffff",
    ColorDark: '#033156',
    black: '#000000',
    ColorDefault: "#241e20",
    Connectiondata: null,
}
const constanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATIONX: return { ...state, locationX: action.data };
        case SET_LOCATIONY: return { ...state, locationY: action.data };
        case SETCONNECT: return { ...state, Connectiondata: action.data };
        case SET_THEME_COLOR: if (action.data == 'dark') {
            return { ...state, bgLight: '#000000', ColorDark: '#ffffff', bgTab: 'rgb(34, 34, 34)' };
        } else {
            return { ...state, bgLight: '#ffffff', ColorDark: '#033156', bgTab: '#033156' };
        }
        default: return state;
    }
}
export default constanceReducer;
