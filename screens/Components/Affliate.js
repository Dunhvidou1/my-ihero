import * as React from "react";
import { Box, VStack } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
const AffiliateComponnent = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.borderitem}    >
			<View style={styles.menuBrand}>
				<Box bg="white" shadow={2} rounded="lg" width="99%" padding={3} mb={2} mx='auto' justifyContent="center" >
					<VStack space={1} height={90}>
						<View style={{ flex: 1, flexDirection: 'column' }} >
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 2 }}>
									<Text style={styles.title}>Invoice ID	</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: {props.Data.invoice_id}   </Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 2, justifyContent: 'center' }}>
									<Text style={styles.title}>Customer Name</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: {props.Data.buyer_name} </Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 2 }}>
									<Text style={styles.title}>Restaurant Name</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: {props.Data.restuarant_name}  </Text>
								</View>
							</View>
							<View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
								<View style={{ flex: 2 }}>
									<Text style={styles.title}>Due Amount</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={styles.data}>: USD {props.Data.amount}  </Text>
								</View>
							</View>
						</View>
					</VStack>
				</Box>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	menuBrand: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 16,
		marginBottom: 1,
		paddingRight: 40,
		fontWeight: '500',
	},
	data: {
		fontSize: 16,
		marginBottom: 1,
		color: '#737373',
		fontWeight: '400',
		justifyContent: 'center'
	},
});
export default AffiliateComponnent;