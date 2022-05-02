import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import TabBrand from '../Components/TabBrand';
import { getAllShop } from "../../store/shop/action";
import { View, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
const Brand = () => {
    const shopData = useSelector(state => state.shops);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllShop());

    }, [dispatch]);
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 4, backgroundColor: '#f2f2f2', width: '100%', paddingTop: 10 }}>
                <ScrollView style={{ width: '100%', }}>
                    <Text style={{ fontSize: 16, paddingLeft: 20, fontWeight: '600' }}>Near By Restourents</Text>
                    <Text style={{ fontSize: 12, color: 'gray', paddingLeft: 20 }}>200+ Restourents found near you</Text>
                    <SafeAreaView>
                        <TabBrand BrandList={shopData.data} />
                    </SafeAreaView>
                </ScrollView>
            </View>
        </View>

    )
}
export default Brand;