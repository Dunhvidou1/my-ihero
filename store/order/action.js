import * as api from "../../api/Index";
export const ORDER = 'ORDER';
export const setOrder = (data) => {
    return { type: ORDER, data: data }
}
export const getOrderCustomer = (token) => {
    return dispatch => {
        api.Order.getOrderCustomer(token).then(response => {
            if (response.data) {
                //console.log(response.data.success.data.length, token);
                dispatch(setOrder(response.data.success.data));
            }
        })
    }

}
