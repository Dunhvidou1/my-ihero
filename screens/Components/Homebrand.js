import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
const Homebrand = props => {
    const navigation = useNavigation()
    return props.BrandList.map
        (ele =>
            <TouchableOpacity
                key={ele.id}
                style={styles.boxItem}
                onPress={() => navigation.navigate("ProductStack", { screen: "ProducList" })}>
                <ImageBackground source={{ uri: ele.logo }} style={styles.img} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: {
        margin: 3,
        padding: 2,
        borderRadius: 6,
        backgroundColor: '#e6e6e6'
    },
    menuBrand: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameBrand: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignItems: "center"
    },
    iconBrand: {
        width: '60%',
        height: '60%',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        justifyContent: 'space-evenly',
    },
})
export default Homebrand;