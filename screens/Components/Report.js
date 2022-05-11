import * as React from "react";
import { Box, VStack } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const Report = (props) => {
	const navigation = useNavigation();
	return props.ReportVal.map((ele, idx) =>
	(
		<View style={styles.borderitem} key={idx}>
			<View style={styles.menuBrand}>
				<Box bg="white" shadow={2} rounded="lg" width="99%" padding={3} mb={2} mx='auto' justifyContent="center" >
					<VStack space={1} height={90}>
						<View style={{ flex: 1, flexDirection: 'column' }} >
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1, justifyContent: 'center' }}>
									<Text style={styles.title}>Restaurant</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: {ele.restuarant_name ? ele.restuarant_name : ' No name'}</Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Invoice</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: {ele.invoice_number_by_vender ? ele.invoice_number_by_vender : ''} </Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Amount(USD)</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ ...styles.data }}>: USD {ele.amount.toFixed(2)}</Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.title}>Recieved	</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ ...styles.data, color: ele.is_customer_acept ? 'green' : 'gold' }}>
										: {ele.is_customer_acept ? 'Ok' : 'Padding'}</Text>
								</View>
							</View>
						</View>
					</VStack>
				</Box>
			</View>
		</View>
	)
	)
}
const styles = StyleSheet.create({
	menuBrand: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 16,
		marginBottom: 1,
		fontWeight: '500',
		paddingRight: 40
	},
	data: {
		fontSize: 16,
		marginBottom: 1,
		fontWeight: '400',
		color: '#737373',
		justifyContent: 'center'
	},
});
export default Report;