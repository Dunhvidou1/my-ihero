import axios from "axios";
axios.defaults.baseURL = "https://ihero.dev.khb.asia/api";
export const Affiliate = {
    getAffiliateByUserId: async () => {
        let result = await axios.get('/referal_log_affiliater');
        return result;
    },
}
export const Item = {
    getMenuByRestaurantId: async (shopId) => {
        let result = await axios.get('/home-front-resturant-menu/' + shopId);
        return result;
    },
    getMenuCategoryByRestaurantId: async (shopId) => {
        let result = await axios.get('/home-front-menu-category/' + shopId);
        return result;
    },
    getMenuByCategoryId: async (shopId, categoryId) => {
        let result = await axios.get(`/home-front-resturant-menu-catecgories/${shopId}/${categoryId}`);
        return result;
    },
}
export const Notification = {
    getNotificationByUserId: async (id) => {
        let result = await axios.get('/get-notification/' + id);
        return result;
    },
}
export const Order = {
    getOrderCustomer: async (token, Page) => {
        let result = await axios.get("/customer/orderReport?page=" + Page, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }
        });
        return result;
    },
    createOrder: async (data, token) => {
        let result = await axios.post('/home-front-restaurant-order', data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return result;
    },
}
export const Shop = {
    getAllShop: async (sort = 'asc') => {
        let result = await axios.get('/home-front-resturant-all?sort=' + sort);
        return result;
    },
    getAllShopCategory: async () => {
        let result = await axios.get('home-front-resturant-categories');
        return result;
    },
    getShopById: async (shopId) => {
        let result = await axios.get('/home-front-resturant/' + shopId);
        return result;
    },
    getTopRateShop: async () => {
        let result = await axios.get("/home-front-resturant");
        return result;
    }
}
export const Address = {
    getProvinc: async () => {
        let result = await axios.get('/get-provinces');
        return result;
    },
    getDistrict: async () => {
        let result = await axios.get('/get-district');
        return result;
    },
    getCommunes: async () => {
        let result = await axios.get('/get-communes');
        return result;
    },
    getVillages: async () => {
        let result = await axios.get('/get-villages');
        return result;
    },
}
export const User = {
    register: async (data) => {
        let result = await axios.post('/register', data);
        return result;
    },
    forgotpassword: async (data) => {
        let result = await axios.post('/forgot/password', data);
        return result;
    },
    checkLogin: async (credential) => {
        let result = await axios.post('/login', credential);
        return result;
    },
    searchData: async (data) => {
        let result = await axios.get('/front_home_restaurant_searct/' + data + '?sort=asc');
        return result;
    },
    logout: async (token) => {
        let result = await axios.get('/user-revoke', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        return result;
    },
    getUserProfile: async (token) => {
        let result = await axios.get('/front-end-customer', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        return result;
    },
    getDashboardCustomer: async (token) => {
        let result = await axios.get('/dashboard-customer', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return result;
    },
    UpdateUserProfile: async (data, token) => {
        let result = await axios.post('/customer-update', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        return result;
    },
    getWithdraw: async (data, token) => {
        let result = await axios.post('/wishlist', data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return result;
    },
    removeWishlist: async (id, token) => {
        let result = await axios.delete('/wishlist/' + id, null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return result;
    },
    getWishlist: async (token) => {
        let result = await axios.get('/wishlist', null, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });
        return result;
    },
}