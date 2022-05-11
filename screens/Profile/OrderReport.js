import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import Color from '../../constant/Color';
import Report from "../Components/Report";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";
import { setOrder } from "../../store/order/action";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderCustomer } from '../../store/order/action';
const OrderReport = ({ navigation }) => {
	const [loading, setloading] = useState(true);
	const [Page, setPage] = useState(1);
	const [Pause, setPause] = useState(null);
	const userData = useSelector(state => state.users.userData);
	const DataReport = useSelector(state => state.orders.data);
	const dispatch = useDispatch();
	const getData = () => {
		if (Pause == null) {
			dispatch(getOrderCustomer(userData.token, Page, result => {
				if (result.error) {
					setloading(false);
				} else {
					setloading(false);
					if (result.last_page == Page) {
						setPause(1)
					}
					if (result.last_page >= Page) {
						let P = Page + 1;
						setPage(P);
						let Report = [];
						Report = [...DataReport, ...result.data];
						dispatch(setOrder(Report));
					}
				}
			}));
		}
	}
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", async () => {
			if (userData) { getData(); }
		})
		return () => {
			unsubscribe
			dispatch(setOrder([]));
		};
	}, [navigation])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				{loading ? <ActivityIndicator size="large" color={Color.textPrimary} /> :
					DataReport && DataReport.length > 0 ?
						<ScrollView
							onScrollEndDrag={() => getData()}
							showsVerticalScrollIndicator={false}
							style={{ flex: 1, width: '100%', paddingTop: 10 }} >
							<View style={{ flex: 1, height: '100%', width: '100%' }} >
								<Report ReportVal={DataReport} />

							</View>
						</ScrollView>
						: <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
							<Ionicons name="md-folder-open-outline" size={100} color='gray' />
							<Text style={{ ...styles.DataEmpty, color: 'gray' }}>Result is Empty</Text>
						</View>
				}
			</View>
		</NativeBaseProvider >
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	DataEmpty: {
		fontSize: 25, fontWeight: '300'
	}
});
export default OrderReport;