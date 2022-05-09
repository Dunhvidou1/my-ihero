import * as React from 'react';
import WithDraw from './WithDraw';
import Dashboard from "./Dashboard";
import MyProfile from "./MyProfile";
import Affiliate from './Affiliate';
import OrderReport from './OrderReport';
import Color from '../../constant/Color';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RequestWithDraw from './RequestWithdraw';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
const ProfileStack = createStackNavigator();
const Profile = ({ navigation }) => {
    const ColorTheme = useSelector(state => state.ColorThemes);
    const config = {
        animation: 'spring',
        config: {
            stiffness: 300,
            damping: 1000,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        }
    }
    const closeConfig = {
        animation: 'spring',
        config: {
            stiffness: 300,
            damping: 1000,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.001,
            restSpeedThreshold: 0.001,
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: Color.bgPrimary }}>
            <ProfileStack.Navigator screenOptions={{
                gestureEnabled: false,
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}>
                <ProfileStack.Screen name="Dashboard" component={Dashboard}
                    options={{
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
                    title: "My Profile",
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
                    title: "Order Report",
                    headerTintColor: Color.textPrimary,
                    headerTitleAlign: "center",
                }} />
                <ProfileStack.Screen name="RequestWithDraw" component={RequestWithDraw} options={{
                    headerBackTitle: " ",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                        , elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    title: "Request WithDraw",
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
                                navigation.navigate("RequestWithDraw")
                            }
                        >
                            <AntDesign name="plus" size={24} color={Color.textPrimary} />
                        </TouchableOpacity>
                    ),
                }} />
            </ProfileStack.Navigator>
        </SafeAreaView>
    )
}
export default Profile;