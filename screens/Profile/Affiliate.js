import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	ActivityIndicator
} from "react-native";
import Color from "../../constant/Color";
import { Ionicons } from "@expo/vector-icons";
import { NativeBaseProvider } from "native-base";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AffiliateComponnent from "../Components/Affliate";
import { getAffiliate, setAffiliateData } from "../../store/user/action";
const Affiliate = ({ navigation }) => {
	const [loading, setloading] = useState(true);
	const [Page, setPage] = useState(1);
	const [Total, setTotal] = useState(0);
	const [Pause, setPause] = useState(null);
	const [TotalAmount, setTotalAmount] = useState(0);
	const userData = useSelector(state => state.users.userData);
	const Data = useSelector(state => state.users.AffliateData);
	const dispatch = useDispatch();
	const getData = () => {
		if (Pause == null) {
			dispatch(getAffiliate(userData.token, Page, result => {
				setloading(false);
				setTotalAmount(result.amount);
				setTotal(result.total);
				if (result.error) {
					console.log(result.error);
				} else {
					if (result.last_page == Page) {
						setPause(1)
					}
					if (result.last_page >= Page) {
						let P = Page + 1;
						setPage(P);
						let Report = [];
						Report = [...Data, ...result.data];
						dispatch(setAffiliateData(Report));
					}

				}
			}));
		}
	}
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", async () => {
			if (userData) getData();
		})
		return () => {
			unsubscribe
			dispatch(setAffiliateData([]));
		};
	}, [navigation])
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				{loading ? <ActivityIndicator size="large" color={Color.textPrimary} /> :
					Data && Data.length > 0 ?
						<ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', padding: 10 }} >
							<View style={styles.Header}>
								<View style={styles.box}>
									<Text style={{ fontSize: 20, fontWeight: '700', color: Color.textPrimary }}>USD {TotalAmount ? TotalAmount : 0.00} </Text>
									<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL AMOUNT</Text>
								</View>
								<View style={styles.box}>
									<Text style={{ fontSize: 20, fontWeight: '700', color: Color.textPrimary }}>{Total ? Total : 0}</Text>
									<Text style={{ fontSize: 14, fontWeight: '500', color: Color.textPrimary }}>TOTAL REFERRED</Text>
								</View>
							</View>
							<View style={{ width: '100%', justifyContent: "center" }} >
								{Data.map((ele, idx) => (
									<AffiliateComponnent Data={ele} key={idx} />
								))}
							</View>
						</ScrollView>
						: <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
							<Ionicons name="md-folder-open-outline" size={100} color='gray' />
							<Text style={{ ...styles.DataEmpty, color: 'gray' }}>Result is Empty</Text>
						</View>}
			</View >
		</NativeBaseProvider >
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	DataEmpty: {
		fontSize: 25, fontWeight: '300'
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