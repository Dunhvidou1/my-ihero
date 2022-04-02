import React, { useState, useEffect } from 'react'

import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'
import Datajson from '../Components/Datajson';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Brand = ({ navigation }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        setData(Datajson.data.success.data);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#f2f2f2' }}>
                    <View style={styles.header_left}>
                        <AntDesign name="left" size={24} color="#008080" style={{}} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.header_center}>
                        <Text style={styles.titleContent}>Add a Payment Method </Text>
                    </View>
                    <View style={styles.header_Right}>
                        <AntDesign name="pluscircleo" size={30} color="#0A8791" />
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={{ flex: 1, width: '100%' }}>


                    <LinearGradient
                        colors={['#0A8791', 'cyan']}
                        style={{ flex: 1, width: '100%', height: '90%', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 100 }} >
                        <Text>Hello world</Text>
                    </LinearGradient>
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff"
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red'
    },
    content: {
        flex: 8,
        width: '100%',
        alignItems: 'center',

    },
    header_left: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    header_center: {
        flex: 3,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header_Right: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    titleContent: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    slide1: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        right: 10,
        bottom: 10
    }
})
export default Brand;