import {
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import Report from "../Components/Report";
import React, { useState, useEffect } from "react";
import { Tabs, NativeBaseProvider } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderCustomer } from '../../store/order/action'
const OrderReport = ({ navigation }) => {
	const userData = useSelector(state => state.users.userData);
	const DataReport = useSelector(state => state.orders.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOrderCustomer(userData.token));
	}, [dispatch])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<View style={styles.content}>
					<SafeAreaView>
						<ScrollView
							showsVerticalScrollIndicator={false} >
							<View
								style={{
									flex: 1,
									flexDirection: "column",
									justifyContent: "center"
								}} >
								{DataReport ? (
									<Report ReportVal={DataReport} />
								) : false}
							</View>
						</ScrollView>
					</SafeAreaView>
				</View>
			</View>
		</NativeBaseProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},

	content: {
		flex: 10,
		width: "100%",
		paddingTop: 10
	},
	addnew: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff5500",
		borderRadius: 5,
		height: 35,
	},
});
export default OrderReport;