import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import Datajson from '../Components/Datajson';
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
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.content_title}>Choose Payment Method to add</Text>
                <View style={styles.cartType}>
                    <View style={styles.CartTyprImg}>
                        <ImageBackground source={{ uri: 'https://image.flaticon.com/icons/png/512/888/888871.png' }} style={styles.CartTyprImg_style} >
                        </ImageBackground>
                    </View>
                    <View style={styles.cartTypeText}>
                        <Text style={styles.cartTypeText_name}>Pay pal</Text>
                        <Text style={styles.cartTypeText_description}>Fast to and sufter to send money</Text>
                    </View>
                </View>
                <View style={styles.cartType}>
                    <View style={styles.CartTyprImg}>
                        <ImageBackground source={{ uri: 'https://image.flaticon.com/icons/png/512/893/893081.png' }} style={styles.CartTyprImg_style} >
                        </ImageBackground>
                    </View>
                    <View style={styles.cartTypeText}>
                        <Text style={styles.cartTypeText_name}>Pay pal</Text>
                        <Text style={styles.cartTypeText_description}>Fast to and sufter to send money</Text>
                    </View>
                </View>
                <View style={styles.cartType}>
                    <View style={styles.CartTyprImg}>
                        <ImageBackground source={{ uri: 'https://image.flaticon.com/icons/png/512/25/25180.png' }} style={styles.CartTyprImg_style} >
                        </ImageBackground>
                    </View>
                    <View style={styles.cartTypeText}>
                        <Text style={styles.cartTypeText_name}>Pay pal</Text>
                        <Text style={styles.cartTypeText_description}>Fast to and sufter to send money</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('Card')}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', color: '#fff' }}>Next</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    next: {
        width: '95%',
        backgroundColor: 'red',
        height: 50,
        position: 'absolute',
        bottom: 10,
        borderRadius: 15,
        backgroundColor: '#0A8791',


    },
    container: {
        flex: 1,
        width: '100%',
    },
    header: {
        flex: 1,
        width: '100%'
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
        alignItems: 'flex-start'
    },
    content: {
        flex: 8,
        width: '100%',
        paddingTop: 40,
        padding: 15,
        alignItems: 'center',

    },
    content_title: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 15.5,
        marginLeft: -100
    },
    cartType: {
        width: '100%',
        height: 50,
        backgroundColor: '#e6e6e6',
        marginVertical: 15,
        borderRadius: 20,
        flexDirection: 'row',
    },
    CartTyprImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartTypeText: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center'

    },
    cartTypeText_name: {
        fontSize: 15.5,


    },
    cartTypeText_description: {
        fontSize: 12.5,
        color: 'gray'

    },
    CartTyprImg_style: {
        width: 30,
        height: 30
    },
    title: {
        flex: 6,
        width: '100%',
        alignItems: 'center'

    },
    titleContent: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    }
})
export default Brand;