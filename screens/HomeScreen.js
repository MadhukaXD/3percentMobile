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
            styles={
                styles.container
            }
        >
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})


export default HomeScreen;
