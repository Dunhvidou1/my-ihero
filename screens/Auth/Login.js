
import {
  Input,
  Icon,
  NativeBaseProvider,
} from 'native-base';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard, Pressable
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { checkLogin } from '../../store/user/action';
import { Feather, AntDesign } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
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
          alert(result.error);
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
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1, width: "100%" }}>
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, width: '100%', justifyContent: 'flex-start', padding: 10, paddingTop: 30, backgroundColor: 'rgba(0,0,0,.5)' }}>
            <Text style={{ color: ColorTheme.gold, fontSize: 25, fontWeight: '700', paddingVertical: 10 }}>Sign in</Text>
            <Text style={{ fontSize: 14, color: "#e6e6e6", paddingBottom: 20 }}>
              Enter Your Phone number or Email address for Sign in ,Enjoy your food
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
                <Text style={{ color: ColorTheme.gold, fontWeight: '700', fontSize: 12, marginVertical: 10, alignSelf: 'flex-end' }} >
                  Forget Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', backgroundColor: 'cyan', height: 45, borderRadius: 1, backgroundColor: ColorTheme.gold, justifyContent: 'center', alignItems: 'center' }}
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
