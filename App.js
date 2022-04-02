import * as React from "react";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import RootStack from "./navigations/Root";
import ShopReducer from "./store/shop/reducer";
import ItemReducer from "./store/item/reducer";
import UserReducer from "./store/user/reducer";
import authReducer from "./store/auth/reducer";
import OrderReducer from "./store/order/reducer";
import FlashMessage from "react-native-flash-message";
import constanceReducer from "./store/constances/Reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
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