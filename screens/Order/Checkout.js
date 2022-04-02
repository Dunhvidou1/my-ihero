import * as React from 'react';
import {
    NativeBaseProvider,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Button,
} from 'native-base';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
const Checkout = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <NativeBaseProvider>
                    <Box flex={1} p={1} w="90%" mx='auto' justifyContent="center"  >
                        <Heading size="xl" color='#0A8791'>CheckOut</Heading>
                        <VStack space={2} mt={5}>
                            <FormControl style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '49%' }}>
                                    <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500, marginRight: 4 }}  >
                                        First Name
                                    </FormControl.Label>
                                    <Input sborder=' 0.2px solid gray' placeholder='Enter First Name' />
                                </View>
                                <View style={{ width: '49%' }}>
                                    <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}  >
                                        Last Name
                                    </FormControl.Label>
                                    <Input sborder=' 0.2px solid gray' placeholder='Enter Last Name' />
                                </View>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                                    Phone Number
                                </FormControl.Label>
                                <Input sborder=' 0.2px solid gray' placeholder='Enter Phone Number' />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}  >
                                    Email
                                </FormControl.Label>
                                <Input sborder=' 0.2px solid gray' placeholder='Enter Email ' />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}  >
                                    Address
                                </FormControl.Label>
                                <Input sborder=' 0.2px solid gray' placeholder='Enter Address ' />
                            </FormControl>
                            <FormControl style={{ flexDirection: 'row' }}>
                                <View>
                                    <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}  >
                                        Country
                                    </FormControl.Label>
                                    <Input sborder=' 0.2px solid gray' placeholder='Enter Country' />
                                </View>
                                <View>
                                    <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 500 }}  >
                                        City
                                    </FormControl.Label>
                                    <Input sorder=' 0.2px solid gray' placeholder='Enter City' />
                                </View>
                            </FormControl>
                            <VStack space={2}>
                                <Button onPress={() => navigation.navigate("Confirmation")} colorScheme="orange" _text={{ color: 'white' }}>
                                    Submit
                                </Button>
                            </VStack>
                        </VStack>
                    </Box>
                </NativeBaseProvider>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: '10%'
    }
});
export default Checkout;