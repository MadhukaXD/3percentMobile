import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'

import { WelcomeHeader } from "../components";

import { constants, images, SIZES, COLORS, FONTS } from "../constants";

const Profile = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View>

        </View>
    )
}

export default Profile
