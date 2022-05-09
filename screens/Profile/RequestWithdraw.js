import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NativeBaseProvider, Input } from "native-base";
const RequestWithDraw = ({ navigation }) => {
	const dispatch = useDispatch();
	const [loading, setloading] = useState(false);
	const userData = useSelector(state => state.users.userData);
	const ColorTheme = useSelector(state => state.ColorThemes);
	const Requeste = () => {
		let fd = new FormData();
		fd.append("first_name", '');
		setloading(true);
		//dispatch(UpdateUserProfile(fd, userData.userData.token, result => {
		//	if (result.error) {
		//	} else { }
		//}))
		navigation.goBack()
	}
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: "column", }} >
					<Text style={{ fontSize: 17, fontWeight: '500', color: 'black', padding: 20, marginVertical: 0 }}>Restaurant*</Text>
					<View style={{ width: '95%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10, alignSelf: 'center' }}>
						<View style={{ width: '90%' }}>
							<Input
								style={{
									borderColor: "#ffffff",
									backgroundColor: "#ffffff",
									borderRadius: 3,
								}}
								onChangeText={(value) => console.log(value)}
								width='100%'
								placeholder="Select Restaurant"
								height={12}
								variant='unstyled'
								keyboardType='numeric'
							/>
						</View>
					</View>
					<TouchableOpacity style={{ ...styles.BtnSave, backgroundColor: ColorTheme.ColorDefault }} onPress={() => Requeste()} >
						<Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>Request Now</Text>
					</TouchableOpacity>
				</View>
				{loading ?
					<View style={{ flex: 1, width: "100%", height: '100%', justifyContent: "center", alignItems: "center", position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)' }}  >
						<ActivityIndicator size="large" color='white' />
					</View> : false}
			</View>
		</NativeBaseProvider >
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%"
	},
	BtnSave: {
		width: '95%',
		minHeight: 45,
		marginVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	}
});
export default RequestWithDraw;