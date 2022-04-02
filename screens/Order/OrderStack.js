import Cart from "./Cart";
import Card from './Card';
import * as React from 'react';
import Payment from './Payment';
import Checkout from "./Checkout";
import { View } from 'react-native';
import Color from '../../constant/Color';
import Confirmation from "./Confirmation";
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const OrderStack = createStackNavigator();
const Orders = () => {
    const ColorTheme = useSelector(state => state.ColorThemes);
    return (
        <OrderStack.Navigator >
            <OrderStack.Screen name="Cart" component={Cart}
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Cart',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700',
                        color: ColorTheme.gold
                    }
                }} />
            <OrderStack.Screen name="Payment" component={Payment}
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Setting',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#ffffff" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <OrderStack.Screen name="Card" component={Card}
                options={{
                    headerTintColor: Color.textPrimary,
                    headerTitle: 'Setting',
                    headerTitleAlign: 'center',
                    headerRight: (props) => (
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="search" size={25} color="#ffffff" style={{ paddingRight: 20 }} />
                        </View>
                    )
                }} />
            <OrderStack.Screen name="Checkout" component={Checkout} options={{
                title: 'Checkout'
            }} />
            <OrderStack.Screen name="Confirmation" component={Confirmation} options={{
                title: 'Confirmation'
            }} />
        </OrderStack.Navigator>)
}
export default Orders;