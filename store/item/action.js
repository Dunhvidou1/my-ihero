import * as api from "../../api/Index";
export const ALL_ITEM = 'ITEM';
export const FAVORITE = 'FAVORITE';
export const CATEGORIES = 'CATEGORIES';
export const ITEM_BY_CATEGORY = 'ITEM_BY_CATEGORY';
export const getAllItem = (shopId) => {
    return dispatch => {
        api.Item.getMenuByRestaurantId(shopId).then(response => {
            if (response.data.success) {
                dispatch({ type: ALL_ITEM, data: response.data.success })
            }
        });
    }
}
export const getFavorite = (token) => {
    return dispatch => {
        api.Item.getWishlist(token).then(response => {
            if (response.data.success) {
                dispatch({ type: FAVORITE, data: response.data.success });
            }
        })
    }
}
export const getAllCategory = (shopId) => {
    return dispatch => {
        api.Item.getMenuCategoryByRestaurantId(shopId).then(response => {
            if (response.data.success) {
                dispatch({ type: CATEGORIES, data: response.data.success });
            }
        })
    }
}
export const getItemByCategory = (shopId, categoryId) => {
    return dispatch => {
        api.Item.getMenuByCategoryId(shopId, categoryId).then(response => {

            if (response.data.success) {
                dispatch({ type: ITEM_BY_CATEGORY, data: response.data.success });
            }
        })
    }
}
