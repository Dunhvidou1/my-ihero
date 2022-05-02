import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Image, Box, Stack, Heading, Text, View } from "native-base";
const CartCheckout = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView onPress={props.onPress}>
                <Box bg="white" shadow={1} rounded="lg" minWidth="100%" width="320" height={150} marginTop={2} >
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'justify', flex: 1, flexDirection: 'row' }}>
                        <View>
                            <Image source={{ uri: props.image }} alt={props.name} resizeMode="cover" height={150} width={180} roundedTop="md" />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Ionicons style={{ position: 'absolute', top: 0, paddingLeft: '75%', zIndex: 90000 }} name="close-outline" size={32} color="red" />
                            <Stack space={4} p={[4, 4, 8]}>
                                <Heading size={["md", "lg", "md"]} noOfLines={2}>
                                    {props.name}
                                </Heading>
                                <Text fontSize="lg" bold lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="red.600">
                                    {props.price}
                                </Text>
                                <Text fontSize="xs">Qty: x10</Text>
                            </Stack>
                        </View>
                    </View>
                </Box>
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    FlexButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
export default CartCheckout;