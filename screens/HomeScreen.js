import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native'

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View

        >
            <Text>Home Screen</Text>
        </View>
    )
}




export default HomeScreen;
