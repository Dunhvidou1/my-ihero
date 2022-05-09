import * as React from "react";
import Color from "../../constant/Color";
import { Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, Image, Share } from 'react-native';
import { backgroundColor } from "styled-system";
const HomeproductBuy = props => {
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    const shopDetail = (ele) => {
        navigation.navigate("ShopProfile", ele);
    }
    const onShare = async (id, val) => {
        try {
            const result = await Share.share({
                message: 'https://ihero.dev.khb.asia/restuarant/detail/' + id + '?referal=' + val,
            });
        } catch (error) {
            alert(error.message);
        }
    };
    return props.Pro_List.map
        (ele =>
            <TouchableOpacity style={styles.boxItem} key={ele.id} onPress={() => shopDetail(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ uri: ele.cover }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele ? ele.name : ''}</Text>
                        <Text style={{ fontSize: 11, color: Color.textPrimary }}><Entypo name="location-pin" size={15} color={Color.textPrimary} />
                            {ele ? ele.city : ''}
                        </Text>
                        {userData.userData ?
                            <TouchableOpacity onPress={() => { onShare(ele.id, userData.userData.user.referal_code) }}>
                                <View style={styles.ContainerContact}>
                                    <Text style={{ color: "#ffffff", fontSize: 12 }}>Share</Text>
                                </View>
                            </TouchableOpacity>
                            : false}
                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 230,
        width: "100%",
        borderRadius: 9,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
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
        alignItems: 'center'
    },
    imagestyle: {
        width: '100%',
        height: '90%',
        borderRadius: 6,

    },
    Pro_image: {
        flex: 4,
        width: '100%',
        padding: 3
    },
    Pro_detail: {
        flex: 2,
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 7,
    },
    nameBrand: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Color.bgPrimary
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,

    },
    ContainerContact: {
        padding: 5,
        marginVertical: 5,
        borderRadius: 4,
        backgroundColor: Color.textPrimary,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default HomeproductBuy;
