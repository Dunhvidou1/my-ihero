import {
	View,
	ScrollView,
	StyleSheet,
	ActivityIndicator
} from "react-native";
import React, { useState, useEffect } from "react";
import { setOrder } from "../../store/order/action";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderCustomer } from '../../store/order/action';
import { NativeBaseProvider } from "native-base";
import WithDrawComponent from "../Components/WithDrawComponent";
const WithDraw = ({ navigation }) => {
	const dispatch = useDispatch();
	const [loading, setloading] = useState(true);
	const [Page, setPage] = useState(1);
	const [Pause, setPause] = useState(null);
	const userData = useSelector(state => state.users.userData);
	const DataReport = useSelector(state => state.orders.data);
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
				{loading ?
					<View style={{ flex: 1, width: "100%", height: '100%', justifyContent: "center", alignItems: "center", position: 'absolute' }}  >
						<ActivityIndicator size="large" color='gray' />
					</View> :
					<ScrollView showsVerticalScrollIndicator={false} >
						<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", padding: 10 }} >
							<WithDrawComponent />
						</View>
					</ScrollView>
				}
			</View>
		</NativeBaseProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%"
	},
	addnew: {
		flex: 1,
		height: 35,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ff5500",
	},
});
export default WithDraw;