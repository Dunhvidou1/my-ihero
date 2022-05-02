import React, { useState } from 'react';
import Color from '../../../constant/Color';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { Image, Box, Text, View } from "native-base";
import { StyleSheet, SafeAreaView } from 'react-native';
const CartDetail = (props) => {
    const [num, setNum] = useState(1);
    return (
        <View style={{ flex: 1, marginVertical: 6 }}>
            <SafeAreaView onPress={props.onPress}>
                <Box bg="white" shadow={1} rounded="lg" width="100%" height={70} marginTop={1}>
                    <View style={styles.container} >
                        <View style={styles.img}>
                            <Image source={{ uri: props.image }} alt='pic' style={styles.imgstyle}></Image>
                        </View>
                        <View style={styles.text}>
                            <View style={styles.text1}>
                                <Text>{props.name}</Text>
                            </View>
                            <View style={styles.text2}>
                                <Text style={{ left: 1, fontSize: 17, color: 'orange', fontWeight: '500' }}>${props.price}.00</Text>
                                <View style={{ flex: 0.8 }}></View>
                                <AntDesign name="minuscircle" size={25} color={Color.textPrimary} />
                                <Text style={{ paddingHorizontal: 10, fontSize: 23 }}>2</Text>
                                <Ionicons name="add-circle" size={30} color={Color.textPrimary} />
                            </View>
                        </View>
                    </View>
                </Box>
            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    FlexButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    container: {
        flex: 1,
        marginHorizontal: 5,
        flexDirection: 'row',
    },
    img: {
        flex: 2,
        paddingHorizontal: 20
    },
    text: {
        flex: 6,
        flexDirection: 'column',
        padding: 5
    },
    text1: {
        flex: 1,
    },
    text2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgstyle: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    }
});
export default CartDetail;