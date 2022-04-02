import * as React from "react";
import Star from 'react-native-star-view';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Color from "../../constant/Color";
const HomeproductBuy = props => {
    const navigation = useNavigation();
    const shopDetail = (ele) => {
        navigation.navigate("ShopProfile", ele);
    }

    return props.Pro_List.map
        (ele =>
            <TouchableOpacity style={styles.boxItem} key={ele.id} onPress={() => shopDetail(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ uri: ele.cover }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>

                        <Text style={{ fontSize: 11, color: Color.textPrimary }}><Entypo name="location-pin" size={15} color={Color.textPrimary} />{ele.city}</Text>
                        <Star score={4} style={styles.starStyle} />

                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: {
        height: 205,
        width: "100%",
        borderRadius: 9,
        marginHorizontal: 5,
        backgroundColor: '#fffFFF',
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
        paddingHorizontal: 7
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

    }
});
export default HomeproductBuy;
