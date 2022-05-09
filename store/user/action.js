export const USER = 'USER';
export const SET_ERROR = 'SET_ERROR';
export const SEARCHDATA = 'SEARCHDATA';
import * as api from "../../api/Index";
export const SETAFFLIATEDATA = 'SETAFFLIATEDATA';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_CREDENTIAL = 'SET_CREDENTIAL';
export const CUSTOMERDASHBOARD = 'CUSTOMERDASHBOARD';
export const SET_ORDERDATA = 'SET_ORDERDATA';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const setAffiliateData = (data) => {
    return { type: SETAFFLIATEDATA, data: data };
}
export const setOrderData = (data) => {
    return { type: SET_ORDERDATA, data: data };
}
export const setCredential = (data) => {
    return { type: SET_CREDENTIAL, data: data };
}
export const setSearchData = (data) => {
    return { type: SEARCHDATA, data: data };
}
export const setCustomerDashboard = (data) => {
    return { type: CUSTOMERDASHBOARD, data: data };
}
export const setError = (data) => {
    return { type: SET_ERROR, data: data };
}
export const setProfile = (data) => {
    return { type: SET_PROFILE, data: data };
}
export const getUserProfile = (token) => {
    return dispatch => {
        api.User.getUserProfile(token).then(response => {
            if (response.data.error) {
                console.log(response.data.error);
                dispatch(removeCredential());
            } else {
                dispatch(setProfile(response.data.success));
            }
        })
    }
}
export const UpdateUserProfile = (data, token, callback) => {
    return dispatch => {
        api.User.UpdateUserProfile(data, token).then(response => {
            if (response.data.error) {
                dispatch(removeCredential());
            } else {
                callback(response.data)
            }
        })
    }
}
export const logout = (token) => {
    return dispatch => {
        api.User.logout(token).then(response => {
            if (response.data.error) {
                console.log(response.data.error);
            } else {
                console.log('Success')
            }
        })
    }
}
export const removeCredential = () => {
    return dispatch => {
        AsyncStorage.removeItem('data');
        dispatch(setCredential(null));
    }
}
export const getDashboardCustomer = (token) => {
    return dispatch => {
        api.User.getDashboardCustomer(token).then(response => {
            if (response.data.error) {
                dispatch(removeCredential());
            } else {
                dispatch(setCustomerDashboard(response.data));
            }
        })
    }
}
export const checkLogin = (credential, callback) => {
    return dispatch => {
        api.User.checkLogin(credential).then(response => {
            callback(response.data)
            if (response.data.success) {
                dispatch(setCredential(response.data.success));
                AsyncStorage.setItem('data', JSON.stringify(response.data.success));
            } else {
                dispatch(setError(response.data.error));
            }
        });
    }
}
export const searchData = (data, callback) => {
    return dispatch => {
        api.User.searchData(data).then(response => {
            callback(response.data)
        });
    }
}
export const register = (data, callback) => {
    return dispatch => {
        api.User.register(data).then(response => {
            if (response.data) {
                callback(response.data)
            }
        });
    }
}
export const forgotpassword = (data, callback) => {
    return dispatch => {
        api.User.forgotpassword(data).then(response => {
            callback(response.data)
        });
    }
}
export const setUser = (data) => {
    return { type: USER, data: data }
}
export const getAffiliate = (token, Page, callback) => {
    return dispatch => {
        api.User.getAffiliate(token, Page).then(response => {
            if (response.data) {
                callback(response.data.success);
            }
        })
    }

}
export const createOrderData = (token, data, callback) => {
    return dispatch => {
        api.User.createOrderData(token, data).then(response => {
            if (response.data) {
                callback(response.data);
            }
        })
    }

}
