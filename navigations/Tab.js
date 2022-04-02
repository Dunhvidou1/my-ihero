import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Home from "../screens/Home/HomeStack";
import Cart from "../screens/Order/OrderStack";
import Profile from "../screens/Profile/ProfileStack";
import Shop from "../screens/Shop/ShopStack";
import AuthStacks from "../screens/Auth/AuthStack";
import { FontAwesome5, Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import Color from "../constant/Color";
const Tabs = () => {
    const userData = useSelector(state => state.users.userData);
    const ColorTheme = useSelector(state => state.ColorThemes);
    return (
        <Tab.Navigator activeColor={ColorTheme.gold}
            inactiveColor={Color.textPrimary}
            barStyle={{ backgroundColor: Color.bgPrimary }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={ColorTheme.gold} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <Feather name="shopping-cart" size={25} color={ColorTheme.gold} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="store" size={20} color={ColorTheme.gold} />
                    ),
                }}
            />
            {userData != null ? (<Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={22} color={ColorTheme.gold} />
                    ),
                }}
            />) : (<Tab.Screen
                name="Login"
                component={AuthStacks}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={22} color={ColorTheme.gold} />
                    ),
                }}
            />)}

        </Tab.Navigator>
    );
}
export default Tabs;