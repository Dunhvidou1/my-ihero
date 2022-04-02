import React, { useEffect } from 'react'
import Product from '../Components/Product';
import { getFavorite } from "../../store/item/action";
import { NativeBaseProvider, Tabs } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import HomeproductBuy from '../Components/HomeproductBuy';
import { getAllShop, getTopRate } from "../../store/shop/action";
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import Color from '../../constant/Color';
const Home = ({ navigation }) => {
    const shopData = useSelector(state => state.shops);
    const itemData = useSelector(state => state.items);
    const userData = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllShop());
        if (userData.data != null) {
            dispatch(getFavorite(userData.data.token));
        }
        dispatch(getTopRate());
    }, [dispatch]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ backgroundColor: Color.bgPrimary, flex: 1, borderBottomRightRadius: 50, }}>
                    <View style={styles.box2}>
                        <Ionicons name="ios-fast-food-outline" size={24} color="#e6e6e6" />
                        <FontAwesome5 name="hamburger" size={24} color="#e6e6e6" />
                        <Ionicons name="ios-pizza-outline" size={24} color="#e6e6e6" />
                        <SimpleLineIcons name="cup" size={24} color="#e6e6e6" />
                        <Ionicons name="wine-outline" size={24} color="#e6e6e6" />
                    </View>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.content1} borderTopLeftRadius={50}>
                    <View style={{ flex: 1, width: '100%', marginTop: 40 }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 9, marginBottom: 10, paddingHorizontal: 13 }}>
                                <View style={styles.rootproduct}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }} color={Color.bgPrimary} paddingLeft={2}>Popular Restaurants</Text>
                                    {/*<Text style={styles.seemore}>More <AntDesign name="arrowright" style={styles.seemore} size={24} color={Color.textPrimary} /></Text>*/}
                                </View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <View style={styles.rootcomponent}>
                                        <HomeproductBuy Pro_List={shopData.data} />
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{ flex: 7, }}>
                                <NativeBaseProvider>
                                    <Tabs align='center' colorScheme="warning" >
                                        <Tabs.Bar backgroundColor={Color.bgPrimary} >
                                            <Tabs.Tab>All Restaurants</Tabs.Tab>
                                            <Tabs.Tab>Favorite</Tabs.Tab>
                                            <Tabs.Tab>Top Rating</Tabs.Tab>
                                        </Tabs.Bar>
                                        <Tabs.Views>
                                            <Tabs.View>
                                                <View style={styles.Container}>
                                                    <Product Pro_List={shopData.data} />
                                                </View>
                                            </Tabs.View>
                                            <Tabs.View>
                                                <View style={styles.Container}>
                                                    <Product Pro_List={itemData.favorite.data} />
                                                </View>
                                            </Tabs.View>
                                            <Tabs.View>
                                                <View style={{ ...styles.Container, flexWrap: "wrap", width: "50%" }}>
                                                    <HomeproductBuy Pro_List={shopData.topRate} />
                                                </View>
                                            </Tabs.View>
                                        </Tabs.Views>
                                    </Tabs>
                                </NativeBaseProvider>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
    },
    header1: {
        flex: 1,
        backgroundColor: 'red',
        borderBottomRightRadius: 50,
    },
    content: {
        flex: 8,
        backgroundColor: Color.bgPrimary,
        borderBottomRightRadius: 50,
    },
    content1: {
        backgroundColor: '#f2f2f2',
        flex: 1
    },
    box: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 20
    },
    box1: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    box2: {
        flex: 1,
        marginBottom: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        // backgroundColor:'cyan'
    },
    rootcomponent: {
        flexDirection: 'row',
        paddingTop: 6,
        width: 170

    },
    rootproduct: {
        justifyContent: 'space-between',

        flexDirection: 'row',
        paddingLeft: 20
    },
    seemore: {
        color: Color.textPrimary,
        fontSize: 14,
        marginRight: 6
    },
});
export default Home;