import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from "./Shop";
import ShopProfile from './ShopProfile';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native"
import Color from '../../constant/Color';
import { useSelector } from 'react-redux';
const ShopStack = createStackNavigator();
const Shops = ({ navigation }) => {
    const ColorTheme = useSelector(state => state.ColorThemes);
    return (
        <ShopStack.Navigator initialRouteName="Shop">
            <ShopStack.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 12 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <Feather name="search" size={24} color={Color.textPrimary} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTintColor: Color.textPrimary,
                    title: "Restaurants",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700',
                        color: ColorTheme.gold

                    },
                    headerTitleAlign: 'left',
                }} />
            <ShopStack.Screen
                name="ShopProfile"
                component={ShopProfile}
                options={{
                    headerBackTitle: ' ',
                    headerTintColor: Color.textPrimary,
                    title: "Restaurants",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleAlign: "center"
                }} />
        </ShopStack.Navigator >
    )
}
export default Shops;