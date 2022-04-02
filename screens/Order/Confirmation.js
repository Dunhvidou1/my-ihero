import {
    NativeBaseProvider,
    Box,
    Heading,
    VStack,
    Button,
    Center
} from 'native-base';
import * as React from 'react';
import CartCheckout from '../Components/CartCheckout';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
const cartCheckout = [
    { id: 1, name: 'Yeezy', price: '$400', image: 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/vad1s3gaaj6fqjaoiiw2/adidas-yeezy-boost-350-v2-mx-oat-lateral', text: 'product text' },
    { id: 1, name: 'Yeezy', price: '$400', image: 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/vad1s3gaaj6fqjaoiiw2/adidas-yeezy-boost-350-v2-mx-oat-lateral', text: 'product text' },
    { id: 2, name: 'Nike Mercurial', price: '$250', image: 'https://static.highsnobiety.com/thumbor/8DtgOqVtVXXxqBpHm5VRO5lahho=/1600x1067/static.highsnobiety.com/wp-content/uploads/2018/06/18142700/world-cup-2018-best-football-boots-ranking-main.jpg', text: 'product text1' },
];
const Confirmation = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <NativeBaseProvider>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Box flex={1} p={1} w="85%" mx='auto' justifyContent="center"  >
                            <Heading size="xl" color='#0A8791'>CheckOut</Heading>
                            <VStack space={2} mt={5}>
                                <View>
                                    {cartCheckout.map(ele => {
                                        return (<View style={styles.card}><CartCheckout name={ele.name} image={ele.image} price={ele.price} key={ele.id} onPress={() => navigation.navigate("productStack", { screen: "ProducDetail" })} /></View>);
                                    })}
                                </View>
                            </VStack>
                        </Box>
                        <Box
                            bg="white"
                            shadow={1}
                            rounded="lg"
                            minWidth="87%"
                            width="170"
                            height={150}
                            marginTop={5}
                        >
                            <Box flex={1} w="85%" mx='auto' justifyContent="center">
                                <Heading size="md" color='#0A8791'>Address</Heading>
                                <VStack space={2} mt={5}>
                                    <Text>City: Phnom Penh, Stueng Mean Chey</Text>
                                    <Text>Phone : 0123456</Text>
                                </VStack>
                            </Box>
                        </Box>
                        <Box
                            bg="white"
                            shadow={1}
                            rounded="lg"
                            minWidth="87%"
                            width="170"
                            height={150}
                            marginTop={5}
                        >
                            <Box flex={1} w="85%" mx='auto' justifyContent="center">
                                <Heading size="md" color='#0A8791'>Total</Heading>
                                <VStack space={2} mt={5}>
                                    <Text>Sub Total: $234</Text>
                                    <Text>Taxes : $0.6</Text>
                                    <Text>Shopping : FREE   </Text>
                                    <Text style={{ fontWeight: 'bold' }}><Text style={{ color: 'red', fontWeight: 'bold' }}>Total</Text> : $234.06</Text>
                                </VStack>
                            </Box>
                        </Box>
                    </View>
                    <VStack w="100%" mt={10} justifyContent="center" alignContent="center">
                        <Center>
                            <Button onPress={() => navigation.navigate("Confirmation")} colorScheme="orange" _text={{ color: 'white' }}>
                                Submit
                            </Button>
                        </Center>
                    </VStack>
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
export default Confirmation;