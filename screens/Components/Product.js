import * as React from "react"
import Color from "../../constant/Color";
import { Entypo } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, Image, Share } from 'react-native';
const ProductList = props => {
    const navigation = useNavigation();
    const userData = useSelector(state => state.users);
    const ProductDetailScreen = (ele) => {
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
    return props.Pro_List ? props.Pro_List.map
        (ele => <TouchableOpacity
            style={styles.boxItem} key={ele.id}
            onPress={() => (ProductDetailScreen(ele))} >
            <View style={styles.menuBrand}>
                <View style={styles.Pro_image}>
                    <Image source={{ uri: ele.cover }} style={styles.imagestyle} />
                </View>
                <View style={styles.Pro_detail}>
                    <Text style={styles.nameBrand}>{ele ? ele.name.substring(0, 15) : ''}</Text>
                    <Text style={{ color: Color.textPrimary, fontSize: 12 }}>
                        <Entypo name="location-pin" size={15} color={Color.textPrimary} />
                        {ele.city}
                    </Text>
                    <Text style={{ fontSize: 12, padding: 5 }}>Open: {ele.open_time} / <Text style={{ fontSize: 12, color: 'red' }}>Close :{ele.close_time}</Text></Text>
                    <View style={styles.aboutshop}>
                        {userData.userData ?
                            <TouchableOpacity onPress={() => { onShare(ele.id, userData.userData.user.referal_code) }}>
                                <View style={styles.ContainerContact}>
                                    <Text style={{ color: "#ffffff", fontSize: 12 }}>     Share    </Text>
                                </View>
                            </TouchableOpacity>
                            : false}
                    </View>
                </View>
            </View>
        </TouchableOpacity>) : false
}
const styles = StyleSheet.create({
    boxItem: {
        height: 130,
        width: '98%',
        borderRadius: 7,
        padding: 3,

        marginVertical: 2,
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
        flex: 2,
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'column',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    nameBrand: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.bgPrimary,
        padding: 5
    },
    pro_price: {
        color: 'red',
        fontWeight: 'bold'
    },
    starStyle: {
        width: 100,
        height: 20,
    },
    aboutshop: {
        color: '#bfbfbf',
        fontSize: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    ContainerContact: {
        padding: 5,
        borderRadius: 4,
        backgroundColor: Color.textPrimary,
    }
});
export default ProductList;