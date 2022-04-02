import { ORDER } from "./action";
const initialState = {
    data: []
}
const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER: return { ...state, data: action.data };
        default: return state;
    }
}
export default OrderReducer;