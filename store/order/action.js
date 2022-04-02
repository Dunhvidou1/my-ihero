import * as api from "../../api/Index";
export const ORDER = 'ORDER';
export const setOrder = (data) => {
    return { type: ORDER, data: data }
}
export const getOrderCustomer = (token, Page, callback) => {
    return dispatch => {
        api.Order.getOrderCustomer(token, Page).then(response => {

            if (response.data) {
                callback(response.data.success);
            }
        })
    }

}
