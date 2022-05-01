import {
  Icon,
  Input,
  NativeBaseProvider
} from 'native-base';
import {
  View,
  Text,
  Keyboard,
  Pressable,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForgotPass } from '../../store/auth/action';
import { forgotpassword } from '../../store/user/action';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { showMessage } from "react-native-flash-message";
const windowHeight = Dimensions.get('window').height;
const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const scrollRef = React.useRef();
  const Data = useSelector(state => state.authData);
  const ColorTheme = useSelector(state => state.ColorThemes);
  const send = () => {
    if (Data.forgotEmail) {
      let fd = new FormData();
      fd.append("email", Data.forgotEmail);
      dispatch(forgotpassword(fd, result => {
        if (result.error) {
          alert(result.error);
        } else {
          alertMessage(1, 'Success!')
        }
      }))
    } else {
      alertMessage(0, 'Field required!')
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
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <NativeBaseProvider>
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{ flex: 1 }}>
          <View style={{ flex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,.5)' }}>
            <ScrollView showsVerticalScrollIndicator={false}
              ref={scrollRef}
              onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}>
              <View style={{ flex: 1, width: '100%', height: windowHeight + 100, justifyContent: 'center', padding: 10, paddingTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                  style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}>
                  <AntDesign name='left' size={25} color={ColorTheme.gold} />
                </TouchableOpacity>
                <Text style={{ color: ColorTheme.gold, fontSize: 25, fontWeight: '700', paddingVertical: 20 }}> Forget password</Text>
                <View style={{ width: '100%' }}>
                  <Text style={{ fontSize: 14, color: "#e6e6e6", paddingBottom: 20 }}>Please enter your email , we’ll send you  how to reset your password</Text>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, borderRadius: 5, marginBottom: 10 }}>
                    <Input
                      onChangeText={text => dispatch(setForgotPass(text))}
                      style={{ color: 'white', height: 45 }}
                      variant='unstyled'
                      placeholder='Email'
                      keyboardType='email-address'
                      autoCorrect={false}
                      autoCapitalize="none"
                      autoComplete={false}
                      InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<Ionicons name="mail-outline" />} />}
                    />
                  </View>
                  <TouchableOpacity style={{ width: '100%', backgroundColor: 'cyan', height: 45, borderRadius: 5, backgroundColor: ColorTheme.gold, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}
                    onPress={() => send()}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>Send</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </NativeBaseProvider >
    </Pressable>
  );
}
export default ForgotPassword;