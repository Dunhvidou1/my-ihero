import Home from "./Home";
import Search from './Search';
import * as React from 'react';
import StartUp from './StartUp';
import Color from '../../constant/Color';
import Notification from './Notification';
import ShopProfile from '../Shop/ShopProfile';
import { useDispatch, useSelector } from "react-redux";
import { NativeBaseProvider, Input } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { searchData, setSearchData } from '../../store/user/action';
import { View, TouchableOpacity, Text, Dimensions, ActivityIndicator } from 'react-native'
const width = Dimensions.get("window").width;
const HomeStack = createStackNavigator();
const Homes = ({ navigation }) => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(null)
    const [loading, setloading] = React.useState(false)
    const ColorTheme = useSelector(state => state.ColorThemes);
    const userData = useSelector(state => state.users);
    const Enter = (search) => {
        if (search) {
            let val = search.trim();
            if (val) {
                setloading(true);
                dispatch(searchData(val, result => {
                    if (result.error) {
                        alert(result.error);
                        setloading(false);
                    } else {
                        setValue(null)
                        dispatch(setSearchData(result.success));
                        setloading(false);
                    }
                }));
            }
        }
    }
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="StartUp" component={StartUp} options={{
                header: () => null
            }} />
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingLeft: 12 }}>
                            <EvilIcons name="location" size={24} color="white" style={{}} />
                            <Text style={{ fontSize: 13, paddingTop: 2, color: Color.textLight }}>Delivery to</Text>
                            <Text style={{ paddingHorizontal: 4, color: Color.textPrimary, fontWeight: '700', paddingTop: 1 }}>Home</Text>
                        </View>),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 15 }}  >
                            <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                                <Feather name="search" size={24} color={Color.textPrimary} style={{ marginHorizontal: 5 }} />
                            </TouchableOpacity>
                        </TouchableOpacity>),
                    title: "",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                        , elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    }
                }} />
            <HomeStack.Screen name="Notification"
                component={Notification}
                options={{
                    headerBackTitle: " ",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary
                        , elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    title: "Notification",
                    headerTintColor: Color.textPrimary,
                    headerTitleAlign: "center",
                }} />
            <HomeStack.Screen
                name="ShopProfile"
                component={ShopProfile}
                options={{
                    headerBackTitle: ' ',
                    headerTintColor: Color.textPrimary,
                    title: "Restaurants",
                    headerStyle: {
                        backgroundColor: Color.bgPrimary,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleAlign: "center"
                }} />
            <HomeStack.Screen
                name="Search"
                component={Search}
                options={{
                    headerBackTitle: " ",
                    headerStyle: {
                        backgroundColor: ColorTheme.bgTab,
                    },
                    headerTitle: "",
                    headerTintColor: ColorTheme.gold,
                    headerRight: (props) => (
                        <NativeBaseProvider>
                            <View style={{ width: width - (0.12 * width), height: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{
                                    width: '90%', borderColor: 'rgba(128,128,128,.2)', borderRadius: 10,
                                    backgroundColor: 'rgba(128,128,128,.2)',
                                    height: 40,
                                }}>
                                    <Input
                                        style={{ color: ColorTheme.gold, fontSize: 15 }}
                                        autoFocus={true}
                                        variant='unstyled'
                                        px={2}
                                        width="100%"
                                        borderRadius={0}
                                        defaultValue={value}
                                        color={ColorTheme.ColorDark}
                                        placeholder="Search here..."
                                        focusable
                                        height={9}
                                        onChangeText={(Text) => setValue(Text)}
                                        onSubmitEditing={(Textvalue) => Enter(value)}
                                        InputRightElement={(
                                            value ?
                                                <TouchableOpacity
                                                    onPress={() => setValue(null)}
                                                    style={{
                                                        height: '100%',
                                                        justifyContent: 'center',
                                                        alignItems: "center",
                                                        flexDirection: "row",
                                                        paddingHorizontal: 15,

                                                    }}>
                                                    <AntDesign name="close" size={25} color='gray' />
                                                </TouchableOpacity>
                                                : false
                                        )}
                                    />
                                </TouchableOpacity>
                                {loading ?
                                    <TouchableOpacity  >
                                        <ActivityIndicator
                                            size='small'
                                            color="gray"
                                            style={{ marginHorizontal: 5 }}
                                        />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => Enter(value)}>
                                        <Feather name="search" size={28} color={ColorTheme.gold} style={{ marginHorizontal: 5 }} />
                                    </TouchableOpacity>}
                            </View>

                        </NativeBaseProvider>
                    ),
                }}
            />
            {/*<HomeStack.Screen name="ProductStack" component={Product} options={{ header: () => null }} />*/}
        </HomeStack.Navigator>
    )
}
export default Homes;