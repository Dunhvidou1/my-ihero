import {
    View,
    Text,
    Image,
    Animated,
    ScrollView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Color from '../../constant/Color';
import ListFood from '../Components/ListFood';
import { ImageBackground } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Backdrop } from "react-native-backdrop";
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderData } from '../../store/user/action';
import { showMessage } from 'react-native-flash-message';
import { getAllItem, getAllCategory } from '../../store/item/action';
const { width, height } = Dimensions.get("window");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ShopProfile = ({ route, navigation }) => {
    const { params } = route;
    const [data, setData] = useState([]);
    const [Select, setSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const items = useSelector(state => state.items);
    const [Variation, setVariation] = useState(null);
    const [loadingItems, setLoadingItems] = useState(true);
    const [ShowForumOption, setShowForumOption] = useState(false);
    const userData = useSelector(state => state.users.userData);
    const OrderData = useSelector(state => state.users.OrderData);
    const dispatch = useDispatch();
    const OpenForumOption = (value) => {
        setSelect(null);
        setVariation(null);
        setData(value);
        setShowForumOption(true);
    };
    const CloseForumOption = () => {
        setShowForumOption(false);
    };
    useEffect(() => {
        navigation.setOptions({ title: params.name });
        dispatch(getAllItem(params.id, result => {
            if (result.error) {
                alert(error);
            } else {
                setLoadingItems(false)
            }
        }));
        dispatch(getAllCategory(params.id));
        setLoading(false)
    }, [dispatch]);
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
                    <View style={{ backgroundColor: Type == 0 ? 'red' : '#4BB543', borderRadius: 20, padding: 10 }}>
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
    const AddToCart = (value) => {
        if (Variation) {
            let newData = OrderData;
            if (newData.length > 0) {
                newData.map((element, index) => {
                    if (value.id == element.id) {
                        if (element.option.size == Variation.size) {
                            let Temp = {
                                "image": element.image,
                                "affiliate_percent": element.affiliate_percent,
                                "id": element.id,
                                "name": element.name,
                                "option": Variation,
                                "price": element.price,
                                "qty": element.qty + 1,
                            }
                            newData.push(Temp);
                            newData.splice(index, 1);
                            dispatch(setOrderData(newData));
                            alertMessage(1, 'Success!')
                        } else if (element.option.size != Variation.size) {
                            let Temp = {
                                "image": element.image,
                                "affiliate_percent": element.affiliate_percent,
                                "id": element.id,
                                "name": element.name,
                                "option": Variation,
                                "price": element.price,
                                "qty": element.qty,
                            }
                            newData.push(Temp);
                            dispatch(setOrderData(newData));
                            alertMessage(1, 'Success!');
                        }
                    } else if (index == newData.length - 1) {
                        let order_data = {
                            image: value.image,
                            affiliate_percent: value.affiliate_percent,
                            id: value.id,
                            name: value.name,
                            price: value.price,
                            qty: 1,
                            option: Variation,
                        };
                        newData.push(order_data);
                        dispatch(setOrderData(newData));
                        alertMessage(1, 'Success!')
                    }
                })
            } else {
                let order_data = {
                    image: value.image,
                    affiliate_percent: value.affiliate_percent,
                    id: value.id,
                    name: value.name,
                    price: value.price,
                    qty: 1,
                    option: Variation,
                };
                newData.push(order_data);
                dispatch(setOrderData(newData));
                alertMessage(1, 'Successful')
            }
            CloseForumOption();
        } else {
            alertMessage(0, 'Please, Select Option first!');
        }
    }
    return (
        <NativeBaseProvider>
            {OrderData.length > 0 ?
                <TouchableOpacity style={styles.Tick} onPress={() => navigation.navigate('Cart', params.id)} >
                    <View style={styles.Tick_1}>
                        <View>
                            < FontAwesome5 name="cart-arrow-down" size={20} color={'white'} />
                            {OrderData ?
                                <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'red', position: "absolute", bottom: -5, right: -5, justifyContent: "center", alignItems: 'center' }}>
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '500',
                                        color: 'white',
                                    }}>{OrderData.length}</Text>
                                </View>
                                : false}
                        </View>
                    </View>
                </TouchableOpacity>
                : false}
            {loading ?
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' color="gray" />
                </View> :
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <ImageBackground source={{ uri: params.cover }}
                            style={{ width: '100%', height: 190 }} borderBottomRightRadius={50} >
                        </ImageBackground>
                        <View style={{
                            flex: 2, width: '100%',
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{ width: '100%' }}>
                                <View style={{ flex: 1, padding: 6, paddingHorizontal: 18, flexDirection: 'row', marginVertical: 10, borderBottomWidth: 0.3, borderColor: '#e6e6e6' }}>
                                    <View style={{ height: '100%', justifyContent: 'center' }}>
                                        <Image source={{ uri: params.logo }} style={{ width: 90, height: 90, borderRadius: 10 }} />
                                    </View>
                                    <View style={{ flex: 1, width: '100%', paddingHorizontal: 20, justifyContent: 'space-evenly' }}>
                                        <Text style={styles.shopname}>{params.name}</Text>
                                        <Text style={{ ...styles.shopabout, color: 'black' }}>{params.city}</Text>
                                        <Text style={styles.shopabout}>Open: {params.open_time} / <Text style={{ ...styles.shopabout, color: 'red' }}>Close :{params.close_time}</Text></Text>
                                    </View>
                                </View>
                                {loadingItems ?
                                    <ActivityIndicator size="large" color={Color.textPrimary} /> :
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <ListFood Open={(ele) => userData ? OpenForumOption(ele) : alertMessage(0, 'Please ,login first!')} DataFood={items.allItem} />
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>}
            <Backdrop
                visible={ShowForumOption}
                handleOpen={OpenForumOption}
                handleClose={CloseForumOption}
                swipeConfig={{
                    velocityThreshold: 0.3,
                    directionalOffsetThreshold: 80,
                }}
                animationConfig={{
                    speed: 10,
                    bounciness: 4,
                }}
                overlayColor="rgba(0,0,0,.3)"
                backdropStyle={{
                    backgroundColor: 'red'
                }}>
                {data ?
                    <View style={{
                        marginTop: -10,
                        paddingTop: 10,
                        width: windowWidth,
                        height: windowHeight / 1.5,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        backgroundColor: '#ffffff'
                    }}>

                        <View style={{ width: '100%', height: windowHeight / 1.5, justifyContent: 'space-between' }}>
                            <View style={{
                                width: '100%',
                                minHeight: 80,
                                flexDirection: 'row',
                                alignSelf: 'flex-start',
                                borderBottomWidth: 0.3,
                                borderColor: '#e6e6e6'
                            }}>
                                <View style={styles.Shopimage}>
                                    <Image source={{ uri: data.image }}
                                        style={{ width: 80, height: 80, borderRadius: 10 }} />
                                </View>
                                <View style={styles.Shopname}>
                                    <Text style={{ fontSize: 17, color: '#262626', fontWeight: '500' }}>{data.name}</Text>
                                    <Text style={{ fontSize: 15, color: 'red', fontWeight: '700' }}>USD {data.price}</Text>
                                </View>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {data.item_option ?
                                    <View style={{ flex: 1, width: '100%', minHeight: 50, justifyContent: 'center', alignItems: 'center' }}>
                                        {data.item_option.map((item, idx) =>

                                            <TouchableOpacity onPress={() => (setVariation(item), setSelect(idx))}
                                                key={idx}
                                                style={{
                                                    width: '100%', height: 50, flexDirection: "row", borderBottomWidth: 0.3, borderColor: '#e6e6e6',
                                                }}>
                                                <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={() => (setVariation(item), setSelect(idx))}
                                                        style={{ width: 25, height: 25, borderRadius: 50, borderWidth: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View onPress={() => (setVariation(item), setSelect(idx))}
                                                            style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: Select == idx ? "black" : 'white' }}>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Size : {item.size}</Text>
                                                </View>
                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Price : +{item.price}$</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                    : false}
                            </ScrollView>
                            <TouchableOpacity style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: "center",
                                height: 50,
                                backgroundColor: Color.bgPrimary,
                                marginBottom: 10
                            }}
                                onPress={() => AddToCart(data)}>
                                <Text style={{ fontSize: 17, color: 'white' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : false}
            </Backdrop >
        </NativeBaseProvider >
    )
}
const styles = StyleSheet.create({
    Tick: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'rgba(255,215,0,.3)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        right: 20
    },
    Tick_1: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxItem: {
        height: 220,
        width: '47%',
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#fafafa'
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height: '100%'
    },
    Pro_image: {
        flex: 3,
        width: '100%'
    },
    Pro_detail: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 7
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,
        marginBottom: 20,
    },
    shopname: {
        fontSize: 17,
        fontWeight: '700',
    },
    shopabout: {
        fontSize: 13,
        color: 'gray'
    },
    starStyle: {
        width: 100,
        height: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
    modalBox: {
        width,
        height,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    content: {
        flex: 1,
        bottom: 0,
        height: 400,
        width: '100%',
        alignItems: "center",
        position: "absolute",
        borderTopLeftRadius: 20,
        flexDirection: 'column',
        justifyContent: "center",
        borderTopRightRadius: 20,
        backgroundColor: "white",
    },
    textStyle: {
        fontSize: 22
    },
    box1: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    box2: {
        flex: 3,
        width: '100%',
        flexDirection: 'row',
        borderColor: '#e6e6e6',
        borderBottomWidth: 1
    },
    box3: {
        flex: 2,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box4: {
        flex: 2,
        width: '100%'
    },
    box5: {
        flex: 3,
        padding: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Shopimage: {
        padding: 6,
        paddingLeft: 20
    },
    imgstyle: {
        width: '100%',
        height: '100%',

    },
    Shopname: {
        flex: 1,
        paddingLeft: 20,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'space-evenly'
    },
    num: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20
    },
    increament: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },


});
export default ShopProfile;
    //let Temp = {
                //    deliveryOrTakeAway: true,
                //    order_data: null,
                //    referrerCode: null,
                //    shop_id: "1",
                //    total_data: 12.91,
                //    user_order: 1,
                //}
