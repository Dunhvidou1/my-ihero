import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./Dashboard";
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import Color from '../../constant/Color';
import MyProfile from "./MyProfile"
import OrderReport from './OrderReport';
import Affiliate from './Affiliate';
import WithDraw from './WithDraw';
import { useSelector } from 'react-redux';
const ProfileStack = createStackNavigator();
const Profile = ({ navigation }) => {
    const ColorTheme = useSelector(state => state.ColorThemes);
    return (
        <ProfileStack.Navigator >
            <ProfileStack.Screen name="Dashboard" component={Dashboard}
                options={{
                    //headerRight: () => (
                    //    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 12 }}>
                    //        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    //            <Ionicons name="notifications-outline" size={24} color={Color.textPrimary} />
                    //        </TouchableOpacity>
                    //    </View>
                    //),
                    headerTintColor: Color.textPrimary,
                    title: "Profile",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '700',
                        color: ColorTheme.gold

                    },
                    headerTitleAlign: 'left',
                }} />
            <ProfileStack.Screen name="MyProfile" component={MyProfile} options={{
                headerBackTitle: " ",
                headerStyle: {
                    backgroundColor: Color.bgPrimary
                    , elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                title: "MyProfile",
                headerTintColor: Color.textPrimary,
                headerTitleAlign: "center",
            }} />
            <ProfileStack.Screen name="OrderReport" component={OrderReport} options={{
                headerBackTitle: " ",
                headerStyle: {
                    backgroundColor: Color.bgPrimary
                    , elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                title: "OrderReport",
                headerTintColor: Color.textPrimary,
                headerTitleAlign: "center",
            }} />
            <ProfileStack.Screen name="Affiliate" component={Affiliate} options={{
                headerBackTitle: " ",
                headerStyle: {
                    backgroundColor: Color.bgPrimary
                    , elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                title: "Affiliate",
                headerTintColor: Color.textPrimary,
                headerTitleAlign: "center",
            }} />
            <ProfileStack.Screen name="WithDraw" component={WithDraw} options={{
                headerBackTitle: " ",
                headerStyle: {
                    backgroundColor: Color.bgPrimary
                    , elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                title: "WithDraw",
                headerTintColor: Color.textPrimary,
                headerTitleAlign: "center",
                headerRight: () => (
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: Color.bgPrimary,
                            marginRight: 10,
                            borderRadius: 5,
                            padding: 6,
                            paddingHorizontal: 8,
                        }}
                        onPress={() =>
                            navigation.navigate("BillingCreate", { params: { ele: null } })
                        }
                    >
                        <AntDesign name="plus" size={24} color={Color.textPrimary} />

                    </TouchableOpacity>
                ),
            }} />

        </ProfileStack.Navigator>
    )
}
export default Profile;