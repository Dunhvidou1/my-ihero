import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
const TabBrand = props => {
    const navigation = useNavigation();
    return props.BrandList.map
        (ele =>
            <TouchableOpacity
                key={ele.id}
                style={props.BrandList}
                onPress={() => navigation.navigate("ShopProfile", ele)}>
                <ImageBackground
                    source={{ uri: ele.cover }}
                    borderRadius={5}
                    style={styles.Img}>
                    <View style={styles.RootName}>
                        <Text style={styles.Name}>{ele.name} </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    imgbackground: {
        height: 130,
    },
    Name: {
        zIndex: 1,
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    RootName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Img: {
        height: 130,
        marginVertical: 10,
        marginHorizontal: 10,
    }
});
export default TabBrand;
