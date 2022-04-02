import React, { useState, useEffect } from 'react'
import Datajson from '../Components/Datajson_Short';
import Cart from '../Components/Food/Cart';
import { NativeBaseProvider, } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import Color from '../../constant/Color';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
const ScreenCart = ({ navigation }) => {
    const [loading, setLoading] = useState(9);
    const [Data, setList] = useState([]);
    useEffect(() => {
        setList(Datajson.data.success.data);
    }, []);
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <NativeBaseProvider >
                            {Data.map(ele => {
                                return (
                                    <View style={styles.card} key={ele.id}>
                                        <Cart
                                            id={ele.id}
                                            name={ele.name}
                                            price={ele.product_variation[0].product_variation_condition[0].price_in_unit}
                                            image={ele.product_image[0].path}
                                            size={ele.product_variation[0].size}
                                            onPress={() => navigation.navigate("productStack", { screen: "ProducDetail" })} />
                                    </View>);
                            })}
                        </NativeBaseProvider>
                        <View style={styles.promotecode}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/368/368200.png' }}
                                    style={{ width: 40, height: 40 }} />

                                <Text style={{ color: 'gray', fontWeight: '500' }}> Add Promo Coden
                                </Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <AntDesign name="right" size={24} color="black" style={{}} />
                            </View>

                        </View>
                        <View style={styles.amount}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, height: 45, alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Item Total</Text>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>$ 16.00</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, height: 45, alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Discount</Text>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>$2.00</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 26, height: 45, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: Color.textPrimary }}>Delivery</Text>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: Color.textPrimary }}>free</Text>
                            </View>
                            <View style={{
                                flex: 1, flexDirection: 'row', justifyContent: 'space-between'
                                , borderColor: '#e6e6e6', borderBottomWidth: 1, borderTopWidth: 1, height: 70, alignItems: 'center', paddingHorizontal: 20
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', }}>Total</Text>
                                <Text style={{ fontSize: 18, fontWeight: '500', }}>$70.00</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Card')}
                    style={{
                        position: "absolute",
                        bottom: 0.4,
                        width: '100%',
                        height: 40,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Color.bgPrimary
                    }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>CheckOut</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1

    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    },
    content: {
        flex: 8,
        width: "100%",
        backgroundColor: 'white'
    },
    promotecode:
    {
        flex: 1,
        margin: 4,
        borderColor: '#e6e6e6',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    amount: {
        flex: 1,
        width: '100%',
        flexDirection: 'column'


    }

});
export default ScreenCart;