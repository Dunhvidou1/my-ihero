import Home from "./Home";
import * as React from 'react';
import StartUp from './StartUp';
import Cart from "../Order/Cart";
import Color from '../../constant/Color';
import { useSelector } from "react-redux";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
const HomeStack = createStackNavigator();
const Homes = () => {
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
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.bgPrimary }}>
            <HomeStack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    transitionSpec: {
                        open: config,
                        close: closeConfig,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                }}>
                <HomeStack.Screen
                    name="StartUp" component={StartUp}
                    options={{ header: () => null }} />
                <HomeStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerLeft: () => (
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingLeft: 12 }}>
                                <EvilIcons name="location" size={24} color="white" style={{}} />
                                <Text style={{ fontSize: 13, paddingTop: 2, color: Color.textLight }}>Delivery to</Text>
                                <Text style={{ paddingHorizontal: 4, color: Color.textPrimary, fontWeight: '700', paddingTop: 1 }}>Home</Text>
                            </View>),
                        title: "",
                        headerStyle: {
                            backgroundColor: Color.bgPrimary
                            , elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        }
                    }} />
                <HomeStack.Screen name="Cart" component={Cart} options={{
                    headerBackTitle: ' ',
                    headerTintColor: Color.textPrimary,
                    title: "Checkout",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,

                    },
                    headerTitleAlign: "center",
                }} />
            </HomeStack.Navigator >
        </SafeAreaView>
    )
}
export default Homes;