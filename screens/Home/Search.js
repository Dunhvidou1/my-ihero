import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { setSearchData } from "../../store/user/action";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const Search = ({ navigation }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = React.useState(true)
    const userData = useSelector(state => state.users);
    const ColorTheme = useSelector(state => state.ColorThemes);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            setLoading(false)
        })
        return () => {
            unsubscribe
            dispatch(setSearchData(null));
        };
    }, [])
    return (
        <NativeBaseProvider>
            {Loading ?
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size='large'
                        color="gray"
                    />
                </View> :
                <View style={styles.container}>
                    {userData.searchData && userData.searchData.length > 0
                        ? <ScrollView stysle={{ margin: 10, width: '100%' }} showsVerticalScrollIndicator={false}>
                            <View style={{ width: '100%', height: '100%', justifyContent: 'center', paddingHorizontal: 10 }}>
                                <Text style={styles.TitleResults}>Result</Text>
                                {userData.searchData.map((ele, idx) => (
                                    <TouchableOpacity style={styles.box} key={idx} onPress={() => navigation.navigate("ShopProfile", ele)} >
                                        <View style={styles.RootImg}>
                                            <ActivityIndicator size='small' color="gray"
                                                style={{ position: 'absolute' }} />
                                            <Image source={{ uri: ele ? ele.logo : '' }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                                        </View>
                                        <View style={styles.RootDetail}>
                                            <Text style={styles.ShopName} >{ele ? ele.name : 'Unknow name'}</Text>
                                            <AntDesign name='right' size={15} color='gray' style={{ position: 'absolute', right: 10 }} />
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                        : <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="md-folder-open-outline" size={100} color={ColorTheme.textGray} />
                            <Text style={{ ...styles.DataEmpty, color: ColorTheme.textGray }}>Result is Emty</Text>
                        </View>
                    }
                </View >
            }
        </NativeBaseProvider >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    box: {
        width: '100%',
        minHeight: 80,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 0.3,
        borderColor: 'gray'
    },
    RootImg: {
        width: 60, height: 60,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RootDetail: {
        flex: 1, width: '100%',
        height: '100%',
        justifyContent: 'center',
        padding: 10
    },
    TitleResults: {
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        margin: 10
    },
    ShopName: {
        fontWeight: '500',
        fontSize: 16,
        color: '#000000'
    },
    DataEmpty: {
        fontSize: 25, fontWeight: '300'

    }

});
export default Search;