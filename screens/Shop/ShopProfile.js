import Color from '../../constant/Color';
import { ImageBackground } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Backdrop } from "react-native-backdrop";
import ListFood from '../Components/Food/ListFood';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllItem, getAllCategory } from '../../store/item/action';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
const { width, height } = Dimensions.get("window");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ShopProfile = ({ route }) => {
    const { params } = route;
    const [loading, setLoading] = useState(true);
    const items = useSelector(state => state.items);
    const [loadingItems, setLoadingItems] = useState(true);
    const [ShowForumOption, setShowForumOption] = useState(false);
    const dispatch = useDispatch();
    const OpenForumOption = () => {
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
                                        <ListFood Open={() => OpenForumOption()} DataFood={items.allItem} />
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
                <View style={{
                    width: windowWidth,
                    height: 250,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: 'cyan',
                    marginTop: -20
                }}>

                </View>
            </Backdrop>
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
        flex: 2,
        padding: 6,
        paddingLeft: 20
    },
    imgstyle: {
        width: '100%',
        height: '100%',

    },
    Shopname: {
        flex: 3,
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