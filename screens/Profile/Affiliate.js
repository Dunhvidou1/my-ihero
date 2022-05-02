import {
	Text,
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import Color from "../../constant/Color";
import { NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AffiliateComponnent from "../Components/Affliate";
import { getAffiliate, setAffiliate } from "../../store/user/action";
const Affiliate = ({ navigation }) => {
	const [loading, setloading] = useState(true);
	const [Page, setPage] = useState(1);
	const [Pause, setPause] = useState(null);
	const userData = useSelector(state => state.users.userData);
	const AffliateData = useSelector(state => state.users.Affliate);
	const dispatch = useDispatch();
	const getData = () => {
		if (Pause == null) {
			dispatch(getAffiliate(userData.token, Page, result => {
				if (result.error) {
					setloading(false);
				} else {
					console.log(result)
					setloading(false);
					if (result.last_page == Page) {
						setPause(1)
					}
					if (result.last_page >= Page) {
						let P = Page + 1;
						setPage(P);
						let Report = [];
						Report = [...AffliateData, ...result.data];
						dispatch(setAffiliate(Report));
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
			dispatch(setAffiliate([]));
		};
	}, [navigation])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.Header}>
						<View style={styles.box}>
							<Text style={{ fontSize: 18, fontWeight: '700', color: Color.textPrimary }}>0 USD</Text>
							<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL AMOUNTS</Text>
						</View>
						<View style={styles.box}>
							<Text style={{ fontSize: 18, fontWeight: '700', color: Color.textPrimary }}>0</Text>
							<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL REFERRED</Text>
						</View>
					</View>
					<View style={{ flex: 1, justifyContent: "center" }} >
						{/*<AffiliateComponnent />*/}
						<Text>Affiliate</Text>
					</View>
				</ScrollView>
			</View>
		</NativeBaseProvider>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 10
	},
	Header: {
		width: '100%',
		minHeight: 100,
		padding: 1,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	box: {
		width: '48%',
		height: 90,
		borderRadius: 5,
		backgroundColor: '#ffffff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.0,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center'

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
export default Affiliate;