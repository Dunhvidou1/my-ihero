import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Color from '../../constant/Color';
import { ImageBackground } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Backdrop } from "react-native-backdrop";
import ListFood from '../Components/Food/ListFood';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItem, getAllCategory } from '../../store/item/action';
const { width, height } = Dimensions.get("window");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ShopProfile = ({ route }) => {
    const { params } = route;
    const [data, setData] = useState([]);
    const [Variation, setVariation] = useState(0);
    const [Select, setSelect] = useState(null);
    const [loading, setLoading] = useState(true);
    const items = useSelector(state => state.items);
    const [loadingItems, setLoadingItems] = useState(true);
    const [ShowForumOption, setShowForumOption] = useState(false);
    const dispatch = useDispatch();
    const OpenForumOption = (value) => {
        setData(value);
        setShowForumOption(true);
    };
    const CloseForumOption = () => {
        setShowForumOption(false);
    };
    useEffect(() => {
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
    return (
        <NativeBaseProvider>
            {loading ?
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' color="gray" />
                </View>
                :
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
                                    <View style={{ flex: 1, width: '100%', paddingHorizontal: 20, justifyContent: 'center' }}>
                                        <Text style={styles.shopname}> {params.name}</Text>
                                        <Text style={styles.shopabout}> {params.city}</Text>
                                    </View>
                                </View>
                                {loadingItems ?
                                    <ActivityIndicator size="large" color={Color.textPrimary} /> :
                                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                        <ListFood Open={(ele) => OpenForumOption(ele)} DataFood={items.allItem} />
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }
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
                        marginTop: -20,
                        paddingTop: 10,
                        width: windowWidth,
                        height: windowHeight / 2,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        backgroundColor: '#ffffff'
                    }}>

                        <View style={{ width: '100%', height: windowHeight / 2, justifyContent: 'space-between' }}>
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
                                            <TouchableOpacity key={idx}
                                                style={{
                                                    width: '100%', height: 50, flexDirection: "row", borderBottomWidth: 0.3, borderColor: '#e6e6e6',
                                                }}>
                                                <View style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={() => (setVariation(item), setSelect(idx))}
                                                        style={{ width: 25, height: 25, borderRadius: 50, borderWidth: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View onPress={() => (setVariation(item), setSelect(idx))}
                                                            style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: Select == idx ? "black" : 'rgba(0,0,0)' }}>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Size : {item.size}</Text>
                                                </View>
                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Price : +{item.price}$</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                    : false}
                            </ScrollView>
                            <View style={{ width: '100%', backgroundColor: '#ffffff', height: 40, marginBottom: 10 }}>
                                <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: "center", minHeight: 39, backgroundColor: Color.bgPrimary }}
                                    onPress={() => AddToCart(data)}>
                                    <Text style={{ fontSize: 17, color: Color.textPrimary }}>Add To Cart</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    : false}
            </Backdrop >
        </NativeBaseProvider >
    )
}
const styles = StyleSheet.create({
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