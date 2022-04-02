import {
  Input,
  Icon,
  NativeBaseProvider,
} from 'native-base';
import {
  View,
  Text,
  Keyboard,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { register } from '../../store/user/action';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import { setPhone, setGender, setPassword } from '../../store/auth/action';
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [Cp, setCp] = React.useState(null)
  const ColorTheme = useSelector(state => state.ColorThemes);
  const Data = useSelector(state => state.authData);
  const Sex = useSelector(state => state.authData.regisGender);
  const Next = () => {
    if (Data.regisPhone && Data.regisPassword && Cp) {
      if (Cp == Data.regisPassword) {
        let fd = new FormData();
        fd.append("first_name", Data.regisFirstname);
        fd.append("last_name", Data.regisLastname);
        fd.append("email", Data.regisEmail);
        fd.append("gender", Data.regisGender);
        fd.append("phone", Data.regisPhone);
        fd.append("password", Data.regisPassword);
        fd.append("password_confirmation", Data.regisPassword);
        dispatch(register(fd, result => {
          if (result.error) {
            alert(result.error);
          } else {
            console.log(result)
            navigation.navigate('Login');
            alertMessage(1, 'Create Success!')
          }
        }))
      } else { alertMessage(0, 'Password not match!') }
    } else { alertMessage(0, 'Field required!') }
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
        <ImageBackground source={require('../Assets/Background/Authentication.jpg')} style={{ flex: 1, }}>
          <View style={{ flex: 1, width: '100%', alignItems: 'center', padding: 10, backgroundColor: 'rgba(0,0,0,.4)' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flexDirection: 'row', width: '100%', minHeight: 90, alignItems: 'center' }}>
              <AntDesign name='left' size={30} color={ColorTheme.gold} />
              <Text style={{ color: ColorTheme.gold, fontSize: 25, fontWeight: '700', paddingHorizontal: 20 }}>Next</Text>
            </TouchableOpacity>
            <View style={{ width: '100%' }}>
              <View style={{ borderColor: 'white', borderWidth: 1, marginBottom: 10, borderRadius: 5 }}>
                <Input
                  onChangeText={text => dispatch(setPhone(text))}
                  style={{ color: 'white', height: 45 }}
                  variant='unstyled'
                  placeholder='Phone'
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoComplete={false}
                  keyboardType='numeric'
                  InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<Feather name="phone" />} />}
                />
              </View>
              <View style={{ borderColor: 'white', borderWidth: 1, marginBottom: 10, borderRadius: 5 }}>
                <Input
                  onChangeText={text => dispatch(setPassword(text))}
                  style={{ color: 'white', height: 45 }}
                  variant='unstyled'
                  placeholder='Passwords'
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoComplete={false}
                  type="password"
                  InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<Feather name="lock" />} />}
                />
              </View>
              <View style={{ borderColor: 'white', borderWidth: 1, marginBottom: 10, borderRadius: 5 }}>
                <Input
                  onChangeText={text => setCp(text)}
                  style={{ color: 'white', height: 45 }}
                  variant='unstyled'
                  placeholder='Comfirm Passwords'
                  autoCorrect={false}
                  autoCapitalize="none"
                  autoComplete={false}
                  type="password"
                  InputLeftElement={<Icon size='sm' ml={1} color="gray.400" as={<Feather name="lock" />} />}
                />
              </View>

              <View style={{ flexDirection: 'row', minHeight: 45, marginBottom: 10, borderRadius: 5, alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => dispatch(setGender(0))} style={{ flexDirection: "row", marginRight: 10, alignItems: 'center' }}>
                  <View
                    style={{
                      width: 25, height: 25, borderRadius: 50, borderColor: "gold",
                      backgroundColor: Sex == 0 ? 'gold' : 'rgba(0,0,0,0)', borderWidth: 2
                    }}></View>
                  <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '500', color: 'white' }}>
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => dispatch(setGender(1))} style={{ flexDirection: "row", alignItems: 'center' }}>
                  <View

                    style={{
                      width: 25, height: 25, borderRadius: 50, borderColor: "gold",
                      backgroundColor: Sex == 1 ? 'gold' : 'rgba(0,0,0,0)', borderWidth: 2
                    }}></View>
                  <Text style={{ paddingHorizontal: 10, fontSize: 16, fontWeight: '500', color: 'white' }}>
                    Female
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ width: '100%', backgroundColor: 'cyan', height: 45, borderRadius: 1, backgroundColor: ColorTheme.gold, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}
                onPress={() => Next()}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </NativeBaseProvider>
    </Pressable>
  );
}
export default Register;