import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import moment from 'moment';
import Color from '../../constant/Color';
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderData } from '../../store/user/action';
import { NativeBaseProvider, Input } from "native-base";
import { showMessage } from 'react-native-flash-message';
import { createOrderData } from '../../store/user/action';
const windowHeight = Dimensions.get('window').height;
const ScreenCart = ({ route, navigation }) => {
    const { params } = route;
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);
    const [TotalData, setTotalData] = useState(0);
    const [Delivery, setDelivery] = useState(true);
    const [ReferrerCode, setReferrerCode] = useState(null);
    const ColorTheme = useSelector(state => state.ColorThemes);
    const userData = useSelector(state => state.users.userData);
    const OrderData = useSelector(state => state.users.OrderData);
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
            let sum = 0;
            for (let i = 0; i < OrderData.length; i++) {
                sum += OrderData[i].price + OrderData[i].option.price;
            }
            setTotalData(sum.toFixed(2));
        })
        return () => {
            unsubscribe
            dispatch(setOrderData([]));
        };
    }, [navigation])
    const AddToCart = () => {
        setLoading(true);
        let fd = {
            deliveryOrTakeAway: Delivery,
            referrerCode: ReferrerCode,
            total_data: TotalData,
            shop_id: params,
            user_order: userData.user.id,
            order_data: OrderData,
        };
        dispatch(createOrderData(userData.token, fd, result => {
            let ParaData = {
                price: TotalData,
                date: moment().format('L'),
                delivery: Delivery ? 'Delivery' : 'Take Away'
            }
            if (result.error) {
                setLoading(false);
                alertMessage(0, result.error);
            } else {
                setLoading(false);
                navigation.navigate('Thankyou', ParaData);
            }
        }));
    }
    const alertMessage = (Type, data) => {
        showMessage({
            message: "",
            hideOnPress: 'true',
            duration: 500,
            renderCustomContent: () => (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingBottom: 10
                }}>
                    <View style={{ backgroundColor: Type == 0 ? 'red' : 'green', borderRadius: 20, padding: 10 }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 13,
                                fontWeight: '500',
                                alignSelf: 'center',
                                color: '#ffffff',
                                marginHorizontal: 30,
                            }}>
                            {data}
                        </Text>
                    </View>
                </View >
            ),
            style: {
                width: '100%',
                minHeight: windowHeight,
                alignSelf: 'center',
                backgroundColor: "red",
                backgroundColor: "rgba(0, 0, 0,.1)",
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }
        });
    }
    return (
        <NativeBaseProvider >
            <View style={styles.container}>
                <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,.2)', justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: Loading ? 100 : 0 }}>
                    <ActivityIndicator size='large' color="gray" />
                </View>
                {OrderData.length < 1 ?
                    <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff' }}>
                        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="md-folder-open-outline" size={100} color={ColorTheme.textGray} />
                            <Text style={{ ...styles.DataEmpty, color: ColorTheme.textGray }}>Result is Empty</Text>
                        </View>
                    </View>
                    :
                    <View style={styles.content}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, width: '100%', marginBottom: 100 }}>
                                <View style={{ width: "100%", paddingHorizontal: 10, paddingVertical: 20 }}>
                                    {OrderData.length > 0 ?
                                        OrderData.map((ele, idx) => (
                                            <View key={idx}
                                                style={{
                                                    width: '100%', minHeight: 50, flexDirection: "row", alignItems: 'flex-start', marginBottom: 10,
                                                    borderBottomWidth: 0.3,
                                                    borderBottomColor: '#e6e6e6'
                                                }}>
                                                <View style={{ width: 90, height: 90, borderRadius: 10, backgroundColor: "gray" }}>
                                                    <Image source={{ uri: ele.image }}
                                                        style={{ width: 90, height: 90, borderRadius: 10 }} />
                                                </View>
                                                <View style={{
                                                    flex: 1, minHeight: 80, paddingHorizontal: 20,
                                                    justifyContent: 'space-between', alignItems: 'flex-start'
                                                }}>
                                                    <Text style={{ fontSize: 17, color: '#4d4d4d', fontWeight: '700', marginBottom: 10 }}>{ele.name}</Text>
                                                    <Text style={{ fontSize: 14, color: 'red', fontWeight: '500', }}>USD {ele.price}</Text>
                                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10 }}>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#4d4d4d' }}>Item:</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#4d4d4d' }}>Size: </Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#4d4d4d' }}>Price</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 5 }}>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 12, color: 'gray' }}>X {ele.qty}</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 12, color: 'gray' }}>{ele.option.size}</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                                                            <Text style={{ fontSize: 12, color: 'gray' }}>+USD {ele.option.price}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        ))
                                        : false}
                                </View>
                                <View style={styles.amount}>
                                    <View style={{ width: '100%', height: 40, flexDirection: 'row', marginVertical: 10 }}>
                                        <View style={{ flex: 1, width: "100%", flexDirection: 'row', justifyContent: "flex-start", paddingHorizontal: 10, alignItems: "center" }}>
                                            <TouchableOpacity onPress={() => setDelivery(true)}
                                                style={{ marginHorizontal: 10, width: 25, height: 25, borderRadius: 50, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: Delivery ? "black" : 'white' }}>
                                                </View>
                                            </TouchableOpacity>
                                            <Text>Delivery</Text>
                                        </View>
                                        <View style={{ flex: 1, width: "100%", flexDirection: 'row', justifyContent: "flex-start", paddingHorizontal: 10, alignItems: "center" }}>
                                            <TouchableOpacity onPress={() => setDelivery(false)}
                                                style={{ marginHorizontal: 10, width: 25, height: 25, borderRadius: 50, borderWidth: 2, justifyContent: 'center', alignItems: 'center' }}>
                                                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: !Delivery ? "black" : 'white' }}>
                                                </View>
                                            </TouchableOpacity>
                                            <Text>Take Away</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        width: "90%",
                                        borderRadius: 5,
                                        alignSelf: "center",
                                        alignItems: 'center',
                                        backgroundColor: '#e6e6e6',
                                    }}>
                                        <Input
                                            style={{
                                                ...styles.container_inputInput,
                                                color: ColorTheme.ColorDark,
                                            }}
                                            width='100%'
                                            variant='unstyled'
                                            autoComplete={false}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            keyboardType='default'
                                            placeholder="Refferal Code"
                                            onChangeText={data => setReferrerCode(data)}
                                        />
                                    </View>
                                    <View style={{
                                        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                        paddingHorizontal: 20, height: 45, alignItems: 'center',
                                    }}>
                                        <Text style={styles.Total}>Item Total</Text>
                                        <Text style={{ ...styles.Total, color: 'red' }}>USD {TotalData}</Text>
                                    </View>
                                    <View style={{
                                        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                                        paddingHorizontal: 20, height: 45, alignItems: 'center',
                                        borderTopWidth: 0.3, borderColor: '#e6e6e6'
                                    }}>
                                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#4d4d4d' }}>Total</Text>
                                        <Text style={{ fontSize: 18, fontWeight: '700', color: 'red' }}>USD {TotalData}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => AddToCart()}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                width: '100%',
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: Color.bgPrimary
                            }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '400' }}>CheckOut</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View >
        </NativeBaseProvider >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    promotecode: {
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
    },
    Btn: {
        width: 30, height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    }, Total: {
        fontSize: 16,
        fontWeight: '500',
        color: '#4d4d4d'
    },
    container_inputInput: {
        height: 45,
        fontSize: 15,
        borderRadius: 10,
        fontWeight: '500',
        paddingHorizontal: 10,
    },
    DataEmpty: {
        fontSize: 25,
        fontWeight: '300'
    }
});
export default ScreenCart;