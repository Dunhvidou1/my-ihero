import Cart from "./Cart";
import * as React from 'react';;
import Color from '../../constant/Color';
import { useSelector } from 'react-redux';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
const OrderStack = createStackNavigator();
const Orders = () => {
    const ColorTheme = useSelector(state => state.ColorThemes);
    const config = {
        animation: 'spring',
        config: {
            stiffness: 300,
            damping: 1000,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        }
    }
    const closeConfig = {
        animation: 'spring',
        config: {
            stiffness: 300,
            damping: 1000,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        }
    }
    return (
        <OrderStack.Navigator screenOptions={{
            gestureEnabled: false,
            transitionSpec: {
                open: config,
                close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}>

        </OrderStack.Navigator>)
}
export default Orders;