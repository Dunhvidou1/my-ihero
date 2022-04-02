import {
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView
} from "react-native";
import { NativeBaseProvider } from "native-base";
import React, { useState, useEffect, useReducer } from "react";
import WithDrawComponent from "../Components/WithDrawComponent";
const WithDraw = () => {
	const [Data, setData] = useState([1, 2, 3, 4, 5])
	return (
		<SafeAreaView>
			<NativeBaseProvider>
				<View style={styles.container}>
					<ScrollView showsVerticalScrollIndicator={false} >
						<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", }} >
							<WithDrawComponent />
						</View>
					</ScrollView>
				</View>
			</NativeBaseProvider>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
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
export default WithDraw;