import {
    Text,
    View,
    Image,
    Alert,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import React from 'react'
import Color from '../../constant/Color';
import { logout } from '../../store/user/action';
import { useDispatch, useSelector } from 'react-redux';
import { List, NativeBaseProvider, } from "native-base";
import { setCustomerDashboard } from '../../store/user/action';
import { getUserProfile, getDashboardCustomer } from '../../store/user/action';
import { AntDesign, Ionicons, FontAwesome5, Fontisto, Feather } from '@expo/vector-icons';
const Dashboard = ({ route, navigation }) => {
    const userData = useSelector(state => state.users);
    const customerDashboard = useSelector(state => state.users.customerDashboard);
    const ColorTheme = useSelector(state => state.ColorThemes);
    const dispatch = useDispatch();
    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            if (userData) {
                dispatch(getUserProfile(userData.userData.token));
                dispatch(getDashboardCustomer(userData.userData.token));
            }
        })
        return () => {
            unsubscribe
            dispatch(setCustomerDashboard(null));
        };

    }, [])
    const Logout = () =>
        Alert.alert(
            "Are you sure ? ",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => false,
                    style: "cancel"
                },
                { text: "OK", onPress: () => dispatch(logout(userData.userData.token)) }
            ]
        );
    return (
        <View style={styles.container}>
            {customerDashboard && userData.userData ?
                <View style={styles.container1}>
                    <View style={styles.header}>
                        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%', paddingLeft: 30 }}>
                                <View style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 50,
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    backgroundColor: 'rgba(0,0,0,.2)'
                                }}>
                                    <ActivityIndicator size="small" color='gray' style={{ position: "absolute" }} />
                                    <Image source={{ uri: userData.userData ? userData.userData.user.profile : '' }} style={styles.userImg} />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.header_Detail} >
                                <Text style={styles.username}  >{userData.userData ? userData.userData.user.name : ""}</Text>
                                <Text style={styles.useremail}>{userData.userData ? userData.userData.user.email : ""}</Text>
                                <Text style={styles.useremail}>{userData.userData ? userData.userData.user.address : ""}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 7, backgroundColor: Color.bgPrimary, alignItems: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: '#e6e6e6', width: '100%', borderTopLeftRadius: 300, alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#fff', width: '90%', height: '17%', borderRadius: 20, top: -30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }}>
                                <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                                    <Feather name="shopping-cart" size={24} color="black" />
                                    <Text style={{ color: '#4d4d4d', fontWeight: "500", fontSize: 12, marginTop: 5 }}>Cart ({customerDashboard ? customerDashboard.order ? customerDashboard.order.length : 0 : 0})</Text>
                                </View>
                                <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                                    <Fontisto name="motorcycle" size={24} color="black" />
                                    <Text style={{ color: '#4d4d4d', fontWeight: "500", fontSize: 12, marginTop: 5 }}>Pick up ({customerDashboard ? customerDashboard.order ? customerDashboard.order.length : 0 : 0})</Text>
                                </View>
                                <View style={{ flex: 1, height: '90%', alignItems: 'center', flexDirection: 'column' }}>
                                    <Ionicons name="receipt" size={24} color="black" />
                                    <Text style={{ color: '#4d4d4d', fontWeight: "500", fontSize: 12, marginTop: 5 }}>Amount ({customerDashboard ? customerDashboard.amount ? customerDashboard.amount : 0 : 0})</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#fff', width: '90%', height: '85%', borderRadius: 10, top: -20 }}>
                                <NativeBaseProvider>
                                    <ScrollView style={{ margin: 10 }} showsVerticalScrollIndicator={false}>
                                        <List borderColor='white' >
                                            <Text style={{ fontSize: 17, fontWeight: '700', paddingLeft: 10 }}>My Account</Text>
                                            <TouchableOpacity style={styles.borderitem} onPress={() => navigation.navigate("MyProfile")}>
                                                <FontAwesome5 style={styles.leftIcon} name="user" />
                                                <Text style={styles.textCenter}>Profile</Text>
                                                <AntDesign style={styles.rightIcon} name="right" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.borderitem} onPress={() => navigation.navigate("OrderReport")} >
                                                <Ionicons name="md-receipt-outline" style={styles.leftIcon} />
                                                <Text style={styles.textCenter}>Order Report</Text>
                                                <AntDesign style={styles.rightIcon} name="right" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.borderitem} onPress={() => navigation.navigate("Affiliate")}>
                                                <Feather name="database" style={styles.leftIcon} />
                                                <Text style={styles.textCenter} >Affiliate</Text>
                                                <AntDesign style={styles.rightIcon} name="right" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.borderitem} onPress={() => navigation.navigate("WithDraw")}>
                                                <AntDesign name="mail" style={styles.leftIcon} />
                                                <Text style={styles.textCenter} >WithDraw</Text>
                                                <AntDesign style={styles.rightIcon} name="right" />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.borderitem} onPress={() => Logout()}>
                                                <FontAwesome5 style={styles.leftIcon} name="history" />
                                                <Text style={styles.textCenter}>Log Out </Text>
                                                <AntDesign style={styles.rightIcon} name="right" />
                                            </TouchableOpacity>
                                        </List>
                                    </ScrollView>
                                </NativeBaseProvider>
                            </View>
                        </View>
                    </View>
                </View >
                : <ActivityIndicator size="large" color={Color.textPrimary} />}
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#e6e6e6',
    },
    header: {
        flex: 2,
        borderBottomRightRadius: 400,
        backgroundColor: Color.bgPrimary,
    },
    header_Content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "flex-end",
    },
    header_back: {
        flex: 3,
        paddingLeft: 10,
        borderBottomRightRadius: 400,
        backgroundColor: Color.bgPrimary,

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
        flex: 1,
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'

    },
    titleCart: {
        width: 30,
        height: 30

    },
    username: {
        fontSize: 17,
        color: 'white',
        fontWeight: '700'
    },
    useremail: {
        fontSize: 12,
        color: 'white',
    },
    leftIcon: {
        fontSize: 17,
        marginLeft: 2,
        marginRight: 10,
        color: Color.bgPrimary,
    },
    textCenter: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '500',
    },
    textLogout: {
        fontSize: 15,
        fontWeight: '500',
        color: Color.bgPrimary,
    },
    rightIcon: {
        top: 3,
        right: 10,
        fontSize: 17,
        position: 'absolute',
        color: Color.bgPrimary,
    }
});
export default Dashboard;