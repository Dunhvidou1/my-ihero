import * as React from "react";
import RootStack from "./navigations/Root";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
import ShopReducer from "./store/shop/reducer";
import ItemReducer from "./store/item/reducer";
import UserReducer from "./store/user/reducer";
import OrderReducer from "./store/order/reducer";
import constanceReducer from "./store/constances/Reducer";
import authReducer from "./store/auth/reducer";
const App = () => {
    const rootReducer = combineReducers({
        shops: ShopReducer,
        items: ItemReducer,
        users: UserReducer,
        orders: OrderReducer,
        ColorThemes: constanceReducer,
        authData: authReducer,
    });
    const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <RootStack />
            <FlashMessage position='bottom' />
        </Provider>
    );
}
export default App;