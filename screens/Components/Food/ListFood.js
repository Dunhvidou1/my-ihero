
import React, { useState, useRef } from 'react';
import {
    Checkbox,
    Actionsheet,
    useDisclose,
} from "native-base"
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Color from '../../../constant/Color'
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux';
const ProductList = props => {
    const navigation = useNavigation();
    const { isOpen, onOpen, onClose } = useDisclose()
    const [Variation, setVariation] = useState(0);
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const SetValue = (val) => {
        setData(val);
    }
    const AddToCart = (data) => {
    }
    return props.DataFood.map
        (ele => (
            <TouchableOpacity style={styles.boxItem} key={ele.id}  >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ uri: ele.image }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>
                        <Text style={{ color: 'gray', fontSize: 12 }}>{ele.updated_at}
                        </Text>
                        <View style={styles.aboutshop}>
                            <Text style={styles.pro_price}>$ {ele.price}</Text>
                            <TouchableOpacity onPress={() => { onOpen(); SetValue(ele) }}>
                                <Ionicons name="add-circle-sharp" size={34} color="#ff9900" />
                            </TouchableOpacity>
                            {data ? (
                                <Actionsheet isOpen={isOpen} onClose={onClose}  >
                                    <Actionsheet.Content p={0}>
                                        <View style={{ width: '100%', minHeight: 200, justifyContent: 'space-between' }}>
                                            <View style={{ width: '100%', minHeight: 80, flexDirection: 'row', alignSelf: 'flex-start', backgroundColor: '#f2f2f2' }}>
                                                <View style={styles.Shopimage}>
                                                    <ImageBackground source={{ uri: data.image }}
                                                        style={styles.imgstyle}
                                                        borderRadius={3}>
                                                    </ImageBackground>
                                                </View>
                                                <View style={styles.Shopname}>
                                                    <Text style={{ fontSize: 19, color: 'gray' }}>{data.name}</Text>
                                                    <Text style={{ fontSize: 13, color: 'red', fontWeight: '600' }}>USD {data.price}</Text>
                                                </View>
                                            </View>
                                            {data.item_option ? (
                                                <View style={{ width: '100%', minHeight: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                                                    {data.item_option.map((item, idx) =>
                                                        <RadioButton.Group key={idx} onValueChange={(newValue) => setVariation(newValue)}
                                                            value={Variation}
                                                        >
                                                            <View style={{ width: '100%', minHeight: 30, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#f2f2f2', marginVertical: 2 }}
                                                            >
                                                                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <TouchableOpacity style={{ borderRadius: 50, borderColor: 'black', borderWidth: 1 }}>
                                                                        <RadioButton value={idx} style={{ margin: 0, color: 'red' }} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={{ fontSize: 14, fontWeight: '300' }}>Size : {item.size}</Text>
                                                                </View>
                                                                <View style={{ flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={{ fontSize: 14, fontWeight: '300' }}>Price : +{item.price}$</Text>
                                                                </View>
                                                            </View>
                                                        </RadioButton.Group>
                                                    )}
                                                </View>
                                            ) : false}
                                            <View style={{ width: '100%', backgroundColor: '#ffffff', minHeight: 40 }}>
                                                <TouchableOpacity style={{ width: '100%', justifyContent: 'center', alignItems: "center", minHeight: 39, backgroundColor: Color.bgPrimary }}
                                                    onPress={() => AddToCart(data)}>
                                                    <Text style={{ fontSize: 17, color: Color.textPrimary }}>Add To Cart</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Actionsheet.Content>
                                </Actionsheet>
                            ) : false}
                        </View>

                    </View>
                </View>

            </TouchableOpacity >
        )
        )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 90,
        width: '98%',
        borderRadius: 7,
        padding: 3,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#fafafa',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    menuBrand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imagestyle: {
        width: '100%',
        height: '95%',
        borderRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    Pro_image: {
        flex: 1,
        width: '100%',

    },
    Pro_detail: {
        flex: 3,
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold', paddingTop: 10
    },
    starStyle: {
        width: 80,
        height: 20,
        marginBottom: 20,
        bottom: 1,
        position: 'absolute'
    },
    aboutshop: {
        color: '#bfbfbf',
        fontSize: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    content: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        minHeight: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        flex: 1,
        flexDirection: 'column'
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
        justifyContent: 'space-between',
        flexDirection: 'row'
        , alignItems: 'center'
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
    },
    imgstyle: {
        width: 80,
        height: 80,
        marginHorizontal: 10

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
export default ProductList;