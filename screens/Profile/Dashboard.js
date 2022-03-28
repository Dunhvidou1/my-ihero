import React from 'react'
import Color from '../../constant/Color';
import { logout } from '../../store/user/action';
import { List, NativeBaseProvider, } from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getDashboardCustomer } from '../../store/user/action';
import { AntDesign, Ionicons, FontAwesome5, Fontisto, Feather } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { getOrderCustomer } from '../../store/order/action';
const Dashboard = ({ route, navigation }) => {
    const userData = useSelector(state => state.users);
    const ColorTheme = useSelector(state => state.ColorThemes);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            if (userData) {
                dispatch(getUserProfile(userData.userData.token));
                dispatch(getOrderCustomer(userData.userData.token));
                dispatch(getDashboardCustomer(userData.userData.token));
            }
        })
        return unsubscribe;
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ flex: 1, width: '100%', height: '100%', paddingLeft: 30 }}>
                        <Image source={{ uri: userData.userData.user.profile }}
                            style={styles.userImg}></Image>
                    </View>
                    <View style={styles.header_Detail} >
                        <Text style={styles.username} onPress={() => console.log(userData.userData.user.profile)}>{userData.userData.user.name}</Text>
                        <Text style={styles.useremail}>{userData.userData.user.email}</Text>
                        <Text style={styles.useremail}>{userData.userData.user.address}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 7, backgroundColor: Color.bgPrimary, alignItems: 'center' }}>
                <View style={{ flex: 1, backgroundColor: '#e6e6e6', width: '100%', borderTopLeftRadius: 300, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', width: '90%', height: '17%', borderRadius: 20, top: -30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }}>
                        <TouchableOpacity style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            <Feather name="shopping-cart" size={24} color="black" />
                            <Text style={{ color: '#4d4d4d', fontWeight: "600" }}>Cart (9)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            <Fontisto name="motorcycle" size={24} color="black" />
                            <Text style={{ color: '#4d4d4d', fontWeight: "600" }}>Pick up (5)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                            <Ionicons name="receipt" size={24} color="black" />
                            <Text style={{ color: '#4d4d4d', fontWeight: "600" }}>Amount (14)</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ backgroundColor: '#fff', width: '90%', height: '85%', borderRadius: 10, top: -20 }}>
                        <NativeBaseProvider>
                            <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
                                <List borderColor='white' >
                                    <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10 }}>My Account</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>
                                        <List.Item style={styles.borderitem} >
                                            <FontAwesome5 style={styles.leftIcon} name="user" />
                                            <Text style={styles.textCenter}>Profile</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("OrderReport")} >
                                        <List.Item style={styles.borderitem} >
                                            <FontAwesome5 style={styles.leftIcon} name="user" />
                                            <Text style={styles.textCenter}>Order Report</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate("Affiliate")}>
                                        <List.Item style={styles.borderitem}>
                                            <AntDesign name="mail" style={styles.leftIcon} />
                                            <Text style={styles.textCenter} >Affiliate</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />

                                        </List.Item>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("WithDraw")}>
                                        <List.Item style={styles.borderitem}>
                                            <AntDesign name="mail" style={styles.leftIcon} />
                                            <Text style={styles.textCenter} >WithDraw</Text>
                                            <AntDesign style={styles.rightIcon} name="right" />

                                        </List.Item>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => dispatch(logout(userData.userData.token))}>
                                        <List.Item style={styles.borderitem}>
                                            <FontAwesome5 style={styles.leftIcon} name="history" />
                                            <Text style={styles.textLogout}>Log Out </Text>
                                            <AntDesign style={styles.rightIcon} name="right" />
                                        </List.Item>
                                    </TouchableOpacity>

                                </List>
                            </ScrollView>
                        </NativeBaseProvider>
                    </View>

                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        flexDirection: 'column'
    },
    header: {
        flex: 2,
        backgroundColor: Color.bgPrimary,
        borderBottomRightRadius: 400,
    },
    header_Content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-end",
    },
    header_back: {
        flex: 3,
        backgroundColor: Color.bgPrimary,
        borderBottomRightRadius: 400,
        paddingLeft: 10

    },
    header_Detail: {
        flex: 3,
        width: '100%',
        height: '100%',
        paddingTop: 20,
        flexDirection: 'column',
    },
    header_center: {
        flex: 3,
    },
    header_textCenter: {
        fontSize: 19,
        fontWeight: '600',
        color: 'white'
    },
    header_Right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    userImg: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    borderitem: {
        height: 50,
        flex: 1,
        justifyContent: 'space-between',
    },
    titleCart: {
        width: 30,
        height: 30

    },
    username: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },
    useremail: {
        color: 'white',
        fontSize: 12
    },
    leftIcon:
    {
        fontSize: 17,
        color: Color.bgPrimary,
        marginLeft: 2,
        marginRight: 10
    },
    textCenter: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray'
    },
    textLogout: {
        fontSize: 15,
        color: Color.bgPrimary,
        fontWeight: '500'
    },
    rightIcon: {
        color: Color.bgPrimary,
        position: 'absolute',
        right: 10,
        top: 3,
        fontSize: 17
    }
});
export default Dashboard;