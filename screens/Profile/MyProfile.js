import {
    Input,
    Select,
    NativeBaseProvider,
} from "native-base";
import {
    View,
    Text,
    Keyboard,
    Dimensions,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator,
    TouchableWithoutFeedback
} from "react-native";
import {
    Entypo,
    Ionicons,
    Foundation,
    FontAwesome,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCredential } from "../../store/user/action";
import { showMessage } from "react-native-flash-message";
import { UpdateUserProfile } from '../../store/user/action'
const height = Dimensions.get('window').height;
const MyProfile = ({ navigation }) => {
    const [Age, setAge] = useState(null);
    const [Gender, setGender] = useState(3);
    const [Phone, setPhone] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [LastName, setLastName] = useState(null);
    const [FirstName, setFirstName] = useState(null);
    const [Showimage, setShowimage] = useState(null);
    const userData = useSelector(state => state.users);
    const ColorTheme = useSelector(state => state.ColorThemes);
    const dataProfile = useSelector(state => state.users.profileData);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            if (dataProfile != null) {
                setFirstName(dataProfile.first_name);
                setLastName(dataProfile.last_name);
                setEmail(dataProfile.email);
                setPhone(dataProfile.phone);
                setGender(dataProfile.gender)
                setAge(dataProfile.age)
                setShowimage(dataProfile.profile)
                setLoading(false)
            }
        })
        return unsubscribe;
    }, [])
    const Update = () => {
        if (FirstName && LastName && Email && Phone && Gender && Age && Showimage) {
            setLoading(true);
            let fd = new FormData();
            fd.append("name", FirstName + '-' + LastName);
            fd.append("first_name", FirstName);
            fd.append("last_name", LastName);
            fd.append("email", Email);
            fd.append("phone", Phone);
            fd.append("gender", Gender);
            fd.append("age", Age);
            fd.append("profile", Showimage);
            dispatch(UpdateUserProfile(fd, userData.userData.token, result => {
                if (result.error) {
                    alertMessage(0, result.error);
                    setLoading(false);
                } else {
                    let UserTemp = userData.userData;
                    UserTemp.user.name = FirstName + ' ' + LastName;
                    UserTemp.user.first_name = FirstName;
                    UserTemp.user.last_name = LastName;
                    UserTemp.user.email = Email;
                    UserTemp.user.phone = Phone;
                    UserTemp.user.gender = Gender;
                    UserTemp.user.age = Age;
                    UserTemp.user.gender = Gender;
                    dispatch(setCredential(UserTemp));
                    alertMessage(1, 'Success');
                    setLoading(false);
                }
            }));
        } else {
            alertMessage(0, 'Field required')
        }
    }
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setShowimage(result.uri);
        }
    };
    const alertMessage = (Type, data) => {
        showMessage({
            message: "",
            hideOnPress: 'true',
            renderCustomContent: () => (
                <View style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingBottom: 10
                }}>
                    <View style={{ backgroundColor: Type == 0 ? 'red' : 'green', borderRadius: 20, padding: 10 }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 13,
                                fontWeight: '500',
                                alignSelf: 'center',
                                color: '#ffffff',
                                marginHorizontal: 30,
                            }}>
                            {data}
                        </Text>
                    </View>
                </View >
            ),
            style: {
                width: '100%',
                minHeight: '100%',
                alignSelf: 'center',
                backgroundColor: "red",
                backgroundColor: "rgba(0, 0, 0,.1)",
                borderRadius: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }
        });
    }
    return (
        <NativeBaseProvider>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                {Loading == false && dataProfile != null ?
                    <View style={styles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.container}>
                                <View style={styles.header}>
                                    <TouchableOpacity
                                        onPress={() => pickImage()}
                                        style={{
                                            position: "absolute",
                                            bottom: -40,
                                            alignSelf: "center",
                                            width: 90,
                                            height: 90,
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(0,0,0,.5)'
                                        }}
                                    >
                                        <ImageBackground
                                            source={Showimage == null ? { uri: 'https://i.stack.imgur.com/l60Hf.png' } : { uri: Showimage }}
                                            style={styles.styleimg}
                                            borderRadius={100}
                                        >
                                            <TouchableOpacity
                                                onPress={() => pickImage()}
                                                style={{
                                                    backgroundColor: "#D8DADF",
                                                    width: 35,
                                                    height: 35,
                                                    textAlign: "right",
                                                    position: "absolute",
                                                    bottom: 1,
                                                    right: 1,
                                                    borderRadius: 100,
                                                    flex: 1,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <ImageBackground
                                                    onPress={() => pickImage()}
                                                    style={{
                                                        width: 23,
                                                        height: 23,
                                                    }}
                                                    source={{
                                                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nI57fSOhDQYHQ5mcHrAAJ_GJ-cmNc9Otva4xf-hhAIVlMCYsCsV_7h40cOzgGcKKtBk&usqp=CAU',
                                                    }}
                                                ></ImageBackground>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, width: '100%', height: "100%", padding: 10 }}>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <FontAwesome name="user" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%', flexDirection: 'row' }}>
                                            <Input
                                                style={{
                                                    borderColor: "#ffffff",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 3,
                                                }}
                                                defaultValue={FirstName}
                                                onChangeText={(value) => setFirstName(value)}
                                                width='100%'
                                                placeholder="Enter First Name"
                                                height={12}
                                                keyboardType='default'
                                                variant='unstyled'

                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <FontAwesome name="user" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%', flexDirection: 'row' }}>
                                            <Input
                                                style={{
                                                    borderColor: "#ffffff",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 3,
                                                }}
                                                defaultValue={LastName}
                                                onChangeText={(value) => setLastName(value)}
                                                width='100%'
                                                placeholder="Enter Last Name"
                                                height={12}
                                                keyboardType='default'
                                                variant='unstyled'
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <Ionicons name="mail" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%' }}>
                                            <Input
                                                style={{
                                                    borderColor: "#ffffff",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 3,
                                                }}
                                                defaultValue={Email}
                                                onChangeText={(value) => setEmail(value)}
                                                width='100%'
                                                placeholder="Enter Email"
                                                height={12}
                                                keyboardType='email-address'
                                                variant='unstyled'
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <Entypo name="phone" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%' }}>
                                            <Input
                                                style={{
                                                    borderColor: "#ffffff",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 3,
                                                }}
                                                defaultValue={Phone}
                                                onChangeText={(value) => setPhone(value)}
                                                width='100%'
                                                placeholder="Enter Phone Number"
                                                height={12}
                                                keyboardType='numeric'
                                                variant='unstyled'
                                            />
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <Foundation name="torsos-male-female" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%' }}>
                                            <Select
                                                style={{
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 1,
                                                    borderColor: "red",
                                                }}
                                                placeholder="Gender"
                                                variant='unstyled'
                                                selectedValue={Gender}
                                                onValueChange={(itemValue) => {
                                                    setGender(itemValue);
                                                }}
                                            >
                                                <Select.Item label="--select--" value={3} />
                                                <Select.Item label="Male" value={1} />
                                                <Select.Item label="Female" value={2} />
                                            </Select>
                                        </View>
                                    </View>
                                    <View style={{ width: '100%', flexDirection: 'row', maxHeight: 50, backgroundColor: '#ffffff', alignItems: 'center', marginBottom: 10 }}>
                                        <View style={{ width: "10%", height: '80%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#e6e6e6' }}>
                                            <MaterialCommunityIcons name="timer-sand-full" size={24} color="black" />
                                        </View>
                                        <View style={{ width: '90%' }}>
                                            <Input
                                                style={{
                                                    borderColor: "#ffffff",
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 3,
                                                }}
                                                defaultValue={Age}
                                                onChangeText={(value) => setAge(value)}
                                                width='100%'
                                                placeholder="Enter Age"
                                                height={12}
                                                variant='unstyled'
                                                keyboardType='numeric'
                                            />
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{ ...styles.BtnSave, backgroundColor: ColorTheme.ColorDefault }} onPress={() => Update()} >
                                        <Text style={{ fontSize: 15, fontWeight: '500', color: 'white' }}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View >
                    : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}  >
                        <ActivityIndicator size="large" color='gray' />
                    </View>}
            </TouchableWithoutFeedback>
        </NativeBaseProvider >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: height + 200
    },
    header: {
        height: 120,
        width: "100%",
        marginBottom: 40,
        backgroundColor: '#241e20',
    },
    content: {
        flex: 10,
        width: "100%",
        paddingTop: 50,

    },
    styleimg: {
        width: 90,
        height: 90,
        borderRadius: 50,
        alignSelf: "center",
    },
    BtnSave: {
        width: '100%',
        minHeight: 45,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default MyProfile;
