import {
    View,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import Shop from "./Shop";
import Search from "./Search";
import * as React from 'react';
import Color from '../../constant/Color';
import { useSelector, useDispatch } from 'react-redux';
import { NativeBaseProvider, Input } from 'native-base';
import { Feather, AntDesign } from "@expo/vector-icons";
import { searchData, setSearchData } from '../../store/user/action';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
const width = Dimensions.get("window").width;
const ShopStack = createStackNavigator();
const Shops = ({ navigation }) => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(null)
    const [loading, setloading] = React.useState(false)
    const userData = useSelector(state => state.users);
    const OrderData = useSelector(state => state.users.OrderData);
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
        <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: Color.bgPrimary }}>
            <ShopStack.Navigator
                initialRouteName="Shop"
                screenOptions={{
                    gestureEnabled: false,
                    transitionSpec: {
                        open: config,
                        close: closeConfig,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
                }}>
                <ShopStack.Screen
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

                                    }}>
                                        <Input
                                            style={{ color: ColorTheme.gold, paddingHorizontal: 10, padding: 4 }}
                                            variant='unstyled'
                                            width="100%"
                                            defaultValue={value}
                                            color={ColorTheme.ColorDark}
                                            placeholder="Search here..."
                                            height={10}
                                            onChangeText={(Text) => (setValue(Text))}
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
                <ShopStack.Screen
                    name="Shop"
                    component={Shop}
                    options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", paddingRight: 12 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                    <Feather name="search" size={24} color={Color.textPrimary} />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerTintColor: Color.textPrimary,
                        title: "Restaurants",
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
            </ShopStack.Navigator >
        </SafeAreaView>
    )
}
export default Shops;