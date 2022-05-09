
import React, { } from 'react';
import Color from '../../constant/Color';
import { Feather } from '@expo/vector-icons';
import { NativeBaseProvider } from "native-base";
import { useDispatch } from 'react-redux';
import { setOrderData } from '../../store/user/action';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const Thankyou = ({ route, navigation }) => {
    const { params } = route;
    const dispatch = useDispatch();
    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", async () => {
        })
        return () => {
            unsubscribe
            dispatch(setOrderData([]));
        };
    }, [navigation])
    return (
        <NativeBaseProvider >
            <View style={styles.container}>
                <View style={styles.CartStyle}>
                    <View style={styles.Tick}>
                        <View style={styles.Tick_1}>
                            <Feather name="check" size={60} color="white" />
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: 'gold', marginVertical: 10 }}>Greate</Text>
                        <Text style={styles.Title}>Payment Success</Text>
                        <View style={{ width: '100%', minHeight: 40, justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray', }}>Pay</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#262626', }}>USD {params.price}</Text>
                        </View>
                        <View style={{ width: '100%', minHeight: 40, justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray', }}>Date of Pay</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#262626', }}>{params.date}</Text>
                        </View>
                        <View style={{ width: '100%', minHeight: 40, justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', flexDirection: "row" }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray', }}>{params.delivery}</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#262626', }}>Free</Text>
                        </View>

                    </View>
                    <View style={styles.Footter}>
                        <Text>Total pay</Text>
                        <Text style={styles.Price}>USD {params.price}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.Btn}>
                    <Text style={{ fontSize: 16, fontWeight: "700", color: 'white' }}>Back</Text>
                </TouchableOpacity>
            </View>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6'
    },
    CartStyle: {
        width: '80%',
        height: 400,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Title: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black',
        marginVertical: 20
    },
    Footter: {
        width: "100%",
        height: 100,
        borderTopWidth: 1,
        borderColor: '#e6e6e6',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Price: {
        fontSize: 22,
        fontWeight: '700',
        color: 'gold'
    },
    Tick: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'rgba(255,215,0,.3)',
        marginTop: -50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Tick_1: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Btn: {
        width: "100%", height: 45,
        backgroundColor: Color.bgPrimary,
        position: 'absolute', bottom: 0,
        justifyContent: "center",
        alignItems: 'center'
    }
});
export default Thankyou;