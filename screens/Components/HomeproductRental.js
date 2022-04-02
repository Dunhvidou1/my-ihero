import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Star from 'react-native-star-view';
const HomeproductRental = props => {
    return props.ProRent_List.map
        (ele =>
            <TouchableOpacity style={styles.boxItem} key={ele.id} onPress={() => editColor(ele)} >
                <View style={styles.menuBrand}>
                    <View style={styles.Pro_image}>
                        <Image source={{ url: ele.product_image[0].path }} style={styles.imagestyle} />
                    </View>
                    <View style={styles.Pro_detail}>
                        <Text style={styles.nameBrand}>{ele.name}</Text>
                        <Text style={styles.pro_price}>$ {ele.product_variation[0].product_variation_condition[0].price_in_unit}</Text>
                        <Star score={4} style={styles.starStyle} />
                        <Entypo name="dots-three-vertical" size={14} color="black" style={{ paddingTop: 5 }} />
                    </View>
                </View>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({

    boxItem: {
        height: 240,
        width: 160,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#fafafa',
        borderWidth: 0.26,
        borderColor: '#e6e6e6'
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
    }
});
export default HomeproductRental;