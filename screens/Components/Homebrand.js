import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
const Homebrand = props => {
    const navigation = useNavigation()
    return props.BrandList.map
        (ele =>
            <TouchableOpacity style={styles.boxItem} key={ele.id}
                onPress={() => navigation.navigate("ProductStack", { screen: "ProducList" })}>
                <ImageBackground source={{ uri: ele.logo }} style={styles.img} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    boxItem: { borderRadius: 6, padding: 2, margin: 2.6, backgroundColor: '#e6e6e6' },
    menuBrand: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    nameBrand: { fontSize: 15, fontWeight: 'bold', color: 'black', alignItems: "center" },
    iconBrand: { width: '60%', height: '60%', },
    img: {
        height: 100,
        width: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
    },
})
export default Homebrand;