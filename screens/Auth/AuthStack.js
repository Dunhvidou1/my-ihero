import * as React from 'react';
import Login from "./Login";
import Register from "./Register";
import Profile from '../Profile/Dashboard';
import ForgotPassword from "./ForgotPassword";
import RegisterNext from './RegisterNext';
import { createStackNavigator } from '@react-navigation/stack';
const AuthStack = createStackNavigator();
const AuthStacks = () => {
    return (
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen name="Login" component={Login} options={{ header: () => null }} />
            <AuthStack.Screen name="Register" component={Register} options={{ header: () => null }} />
            <AuthStack.Screen name="RegisterNext" component={RegisterNext} options={{ header: () => null }} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ header: () => null }} />
            <AuthStack.Screen name="Profile" component={Profile} options={{ header: () => null }} />
        </AuthStack.Navigator>
    )

}
export default AuthStacks;