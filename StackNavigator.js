import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import OnBoarding from './screens/OnBoarding';
import Nutrition from './screens/Nutrition';
import Training from './screens/Training';
import HomeMenu from './screens/HomeMenu';
import SignIn from './screens/SingIn';
import ForgotPassword from './screens/ForgotPassword';
import Otp from './screens/Otp';

import Tabs from "./navigation/Tabs"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const user = true;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {user ? (
                <>

                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="OnBoarding" component={OnBoarding} />
                    <Stack.Screen name="HomeMenu" component={HomeMenu} />
                    <Stack.Screen name="Home" component={HomeScreen} component={Tabs} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Nutrition" component={Nutrition} />
                    <Stack.Screen name="Training" component={Training} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="Otp" component={Otp} />
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator
