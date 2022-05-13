
import {
  View,
  Text,
  Keyboard,
  Pressable,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { checkLogin } from '../../store/user/action';
import { useDispatch, useSelector } from 'react-redux';
import { Feather, AntDesign } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
import { Icon, Input, NativeBaseProvider, } from 'native-base';
const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({ navigation }) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [password, setPassword] = useState(null);
  const ColorTheme = useSelector(state => state.ColorThemes);
  const FunLogin = () => {
    if (email && password) {
      setLoading(true);
      let fd = new FormData();
      fd.append("email", email);
      fd.append("password", password);
      fd.append("device", "phone");
      dispatch(checkLogin(fd, result => {
        if (result.error) {
          setLoading(false);
          console.log(result);
          alertMessage(0, 'Invalid email and password')
        }
      }));
    } else {
      alertMessage(0, 'Field required')
    }
  }
  const alertMessage = (Type, data) => {
    showMessage({
      message: "",
      hideOnPress: 'true',
      duration: 500,
      renderCustomContent: () => (
        <View style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 10
        }}>
          <View style={{ backgroundColor: Type == 0 ? 'red' : '#4BB543', borderRadius: 20, padding: 10 }}>
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
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1, width: "100%" }}>
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,.5)' }}>
            <ScrollView showsVerticalScrollIndicator={false}
              ref={scrollRef}
              onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}>
              <View style={{ flex: 1, width: '100%', height: windowHeight, justifyContent: 'center', padding: 10, paddingTop: 30 }}>
                <Text style={{ color: ColorTheme.gold, fontSize: 25, fontWeight: '700', paddingVertical: 20 }}>Log in</Text>
                <Text style={{ fontSize: 14, color: "#e6e6e6", paddingBottom: 20 }}>
                  Enter Your Phone Email address and password for Sign in ,Enjoy your food
                </Text>
                <View style={{ width: '100%' }}>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, marginBottom: 10, borderRadius: 5 }}>
                    <Input
                      variant='unstyled'
                      keyboardType="email-address"
                      placeholder='Email-Address'
                      onChangeText={text => setEmail(text)}
                      autocomplete="off"
                      defaultValue={email}
                      autoCapitalize='none'
                      style={{ color: 'white', height: 45 }}
                      InputLeftElement={<Icon size='sm' ml={2} color="gray.400"
                        as={<AntDesign name="user" size={29} color="black" />} />}
                    />
                  </View>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, borderRadius: 5 }}>
                    <Input
                      variant='unstyled'
                      type="password"
                      autocomplete="off"
                      autoCapitalize='none'
                      defaultValue={password}
                      placeholder='Password'
                      style={{ color: 'white', height: 45 }}
                      onChangeText={text => setPassword(text)}
                      InputLeftElement={<Icon size='sm' ml={2} color="gray.400"
                        as={<Feather name="lock" size={29} color="black" />} />}
                    />
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                    <Text style={{ color: ColorTheme.gold, fontWeight: '700', fontSize: 14, marginVertical: 10, alignSelf: 'flex-end' }} >
                      Forget Password?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: '100%', backgroundColor: 'cyan', height: 45, borderRadius: 5, backgroundColor: ColorTheme.gold, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => FunLogin()}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Log in
                    </Text>
                  </TouchableOpacity>
                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: 'white' }}>Don't you have any Account?. </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                      <Text style={{ fontSize: 16, fontWeight: '600', color: ColorTheme.gold }}>
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          {Loading ?
            <View style={{ flex: 1, width: "100%", height: '100%', justifyContent: "center", alignItems: "center", position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)' }}  >
              <ActivityIndicator size="large" color='white' />
            </View> : false}
        </ImageBackground>
      </Pressable >
    </NativeBaseProvider >
  );
}
export default HomeScreen;
