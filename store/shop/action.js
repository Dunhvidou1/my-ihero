import * as api from "../../api/Index"
export const SHOP = 'SHOP';
export const TOP_RATE = 'TOP_RATE';
export const getAllShop = () => {
    return dispatch => {
        api.Shop.getAllShop().then(response => {

            if (response.data) dispatch({ type: SHOP, data: response.data.success });
        });
    }
}
export const getTopRate = (callback) => {
    return dispatch => {
        api.Shop.getTopRateShop().then(response => {
            if (response.data.success) {
                callback(response.data);
                dispatch({ type: TOP_RATE, data: response.data.success });
            }
        })
    }

}
