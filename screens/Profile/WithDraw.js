import {
	View,
	ScrollView,
	StyleSheet,
	SafeAreaView
} from "react-native";
import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import WithDrawComponent from "../Components/WithDrawComponent";
const WithDraw = () => {
	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<View style={styles.container}>
					<ScrollView showsVerticalScrollIndicator={false} >
						<View style={{ flex: 1, flexDirection: "column", justifyContent: "center", }} >
							<WithDrawComponent />
						</View>
					</ScrollView>
				</View>
			</SafeAreaView>
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