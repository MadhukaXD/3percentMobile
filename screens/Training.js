import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text
} from 'react-native'

const Training = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View>
            <Text>I am Training</Text>
        </View>
    )
}

export default Training
