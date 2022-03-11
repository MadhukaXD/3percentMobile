import { useNavigation } from '@react-navigation/core'
import React, { useLayoutEffect } from 'react'
import {
    View,
    Text,
    Button,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    StatusBar
} from 'react-native'

import LinearGradient from "react-native-linear-gradient";

import { images, COLORS } from "../constants";
import { CustomButton } from "../components";
import OnBoarding from '../screens/OnBoarding';

const LoginScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    function renderHeader() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <ImageBackground
                    source={images.loginBackground1}
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}
                    resizeMode="cover"
                >
                </ImageBackground>
            </View>
        )
    }

    function renderDetail() {
        return (
            // Button

            <View
                style={{
                    justifyContent: 'center',
                }}
            >
                {/* Header */}
                <CustomButton
                    buttonText="Get Started"
                    buttonContainerStyle={{
                        paddingVertical: 18,
                        borderRadius: 20,
                        margintop: 2,
                    }}
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => { navigation.navigate("OnBoarding") }}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}
        >
            <StatusBar barStyle="light-content" />

            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}

        </View>
    );
}

export default LoginScreen;



