export const USER = 'USER';
export const SET_ERROR = 'SET_ERROR';
export const SEARCHDATA = 'SEARCHDATA';
import * as api from "../../api/Index";
export const SETAFFLIATE = 'SETAFFLIATE';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_CREDENTIAL = 'SET_CREDENTIAL';
export const CUSTOMERDASHBOARD = 'CUSTOMERDASHBOARD';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const setAffiliate = (data) => {
    return { type: SETAFFLIATE, data: data };
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
export const logout = (token) => {
    return dispatch => {
        api.User.logout(token).then(response => {
            if (response.data.success) {
                AsyncStorage.removeItem('data');
                dispatch(setCredential(null));
            } else {
                alert(response.data.error);
            }
        })
    }
}
export const getUserProfile = (token) => {
    return dispatch => {
        api.User.getUserProfile(token).then(response => {
            if (response.data) {
                dispatch(setProfile(response.data.success));
            } else {
                alert(response.data.error);
            }
        })
    }
}
export const UpdateUserProfile = (data, token, callback) => {
    return dispatch => {
        api.User.UpdateUserProfile(data, token).then(response => {
            if (response.data) {
                callback(response.data)
            } else {
                alert(response.data.error)
            }
        })
    }
}
export const getDashboardCustomer = (token) => {
    return dispatch => {
        api.User.getDashboardCustomer(token).then(response => {
            if (response.data) {
            } else {
                alert(response.data.error)
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
                console.log('Response Is :', response.data);
                callback(response.data.success);
            }
        })
    }

}
export const createOrder = (token, data, callback) => {
    return dispatch => {
        api.User.createOrder(token, data).then(response => {
            if (response.data) {
                callback(response.data);
            }
        })
    }

}
