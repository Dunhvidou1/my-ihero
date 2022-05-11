import {
  Input,
  Icon,
  NativeBaseProvider,
} from 'native-base';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { setFirstname, setLastname, setEmail } from '../../store/auth/action';
import { ImageBackground, View, Text, TouchableOpacity, Keyboard, Pressable, ScrollView, Dimensions, ActivityIndicator } from 'react-native'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Register = ({ navigation }) => {
  const scrollRef = React.useRef();
  const dispatch = useDispatch();
  const [Loading, setLoading] = React.useState(false);
  const ColorTheme = useSelector(state => state.ColorThemes);
  const Data = useSelector(state => state.authData);
  const Next = () => {
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (Data.regisFirstname && Data.regisLastname && Data.regisEmail) {
      if (reg.test(Data.regisEmail) == true) {
        setLoading(true);
        navigation.navigate('RegisterNext');
        setLoading(false);
      } else {
        alertMessage(0, 'Invalid email!')
      }
    } else {
      alertMessage(0, 'Field required!')
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
      <Pressable onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{ flex: 1, }}>
          <View style={{ flex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,.5)' }}>
            <ScrollView showsVerticalScrollIndicator={false}
              ref={scrollRef}
              onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: true })}>
              <View style={{ flex: 1, width: '100%', height: windowHeight, justifyContent: 'center', padding: 10, paddingTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                  style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start' }}>
                  <AntDesign name='left' size={25} color={ColorTheme.gold} />
                </TouchableOpacity>
                <Text style={{ color: ColorTheme.gold, fontSize: 25, fontWeight: '700', paddingVertical: 20 }}>Create Account</Text>
                <Text style={{ fontSize: 14, color: "#e6e6e6", paddingBottom: 20 }}>Enter Your Username ,Email and password sign up.
                </Text>
                <View style={{ width: '100%' }}>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, marginBottom: 10, borderRadius: 5 }}>
                    <Input
                      onChangeText={text => dispatch(setFirstname(text))}
                      style={{ color: 'white', height: 45 }}
                      variant='unstyled'
                      placeholder='First Name'
                      autoCorrect={false}
                      autoCapitalize="none"
                      autoComplete={false}
                      InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<AntDesign name="user" />} />}
                    />
                  </View>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, marginBottom: 10, borderRadius: 5 }}>
                    <Input
                      onChangeText={text => dispatch(setLastname(text))}
                      style={{ color: 'white', height: 45 }}
                      type='email'
                      variant='unstyled'
                      autoCorrect={false}
                      autoCapitalize="none"
                      autoComplete={false}
                      placeholder='Last Mame'
                      InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<MaterialCommunityIcons name="email-edit-outline" />} />}
                    />
                  </View>
                  <View style={{ borderColor: 'white', borderWidth: 0.3, marginBottom: 10, borderRadius: 5 }}>
                    <Input
                      onChangeText={text => dispatch(setEmail(text))}
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
                    onPress={() => Next()}>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                  <View style={{
                    width: '100%', alignItems: 'center',
                    justifyContent: 'center', flexDirection: 'row'
                  }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>Do you have any Account?. </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={{ fontSize: 16, fontWeight: '600', color: ColorTheme.gold }}>
                        sign in
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
      </Pressable>
    </NativeBaseProvider>
  );
}
export default Register;