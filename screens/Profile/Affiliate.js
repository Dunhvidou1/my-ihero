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
import { getWishlist, } from '../../store/affiliate/action'
const Affiliate = ({ navigation }) => {
	const userData = useSelector(state => state.users.userData);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getWishlist(userData.token));
	}, [dispatch])
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
						<AffiliateComponnent />
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