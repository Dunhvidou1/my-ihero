import * as React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import Star from "react-native-star-view/lib/Star";
import Color from "../../constant/Color"
const ProductList = props => {
    const navigation = useNavigation();
    const ProductDetailScreen = (ele) => {
        navigation.navigate("ShopProfile", ele);
    }
    return props.Pro_List ? props.Pro_List.map
        (ele =>
            <TouchableOpacity style={styles.boxItem} key={ele.id} onPress={() => ProductDetailScreen(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ uri: ele.cover }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>

                        <Text style={{ color: Color.textPrimary, fontSize: 12 }}>
                            <Entypo name="location-pin" size={15} color={Color.textPrimary} />
                            {ele.city}
                        </Text>
                        <View style={styles.aboutshop}>
                            <Star score={4} style={styles.starStyle} />
                            <TouchableOpacity>
                                <View style={{ backgroundColor: Color.textPrimary, padding: 5, borderRadius: 4 }}>
                                    <Text style={{ color: "#ffffff", fontSize: 12 }}>Contact</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        ) : (false)
}
const styles = StyleSheet.create({
    boxItem: {
        height: 90,
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
        padding: 6,
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
    aboutshop: {
        color: '#bfbfbf',
        fontSize: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 6
    }
});
export default ProductList;