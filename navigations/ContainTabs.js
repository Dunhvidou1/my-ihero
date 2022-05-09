import * as React from "react";
import Tabs from "./Tab";
import Color from "../constant/Color";
import Cart from "../screens/Order/Cart";
import { SafeAreaView } from "react-native";
import Thankyou from "../screens/Order/Thankyou";
import ShopProfile from "../screens/Shop/ShopProfile";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
const StartUp = createStackNavigator();
const ConatainTab = () => {
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
			<StartUp.Navigator
				screenOptions={{
					gestureEnabled: true,
					gestureDirection: 'horizontal',
					transitionSpec: {
						open: config,
						close: closeConfig,
					},
					cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
				}} >
				<StartUp.Screen name="Tabs" component={Tabs} options={{ header: () => null }} />
				<StartUp.Screen name="Thankyou" component={Thankyou} options={{ header: () => null }} />
				<StartUp.Screen
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
						headerTitleAlign: "center",
					}} />
				<StartUp.Screen
					name="Cart"
					component={Cart}
					options={{
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

			</StartUp.Navigator>
		</SafeAreaView >
	);
};
export default ConatainTab
	;
