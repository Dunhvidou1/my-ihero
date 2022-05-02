import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import * as React from "react";
const TabShop = props => {
    return props.ShopList.map
        (ele =>
            <TouchableOpacity style={sstyles.borderitem} key={ele.id}>
                <ImageBackground
                    source={{ uri: ele.logo_company }}
                    borderRadius={2}
                    style={{ height: 160, width: '100%' }}>
                    <View style={styles.boxtext}>
                        <Text style={styles.shopName}>{ele.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    borderitem: {
        margin: 3,
        width: '48%',
        marginBottom: 5,
    },
    boxtext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shopName: {
        zIndex: 1,
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    }
});
export default TabShop;