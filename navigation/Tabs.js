import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";



import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { HomeScreen, Profile, Training, Nutrition } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    elevation: '0',
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12,
                                }}
                            >HOME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Nutrition"
                component={Nutrition}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.nutrition}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black,
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >NUTRITION</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Training"
                component={Training}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.training}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >TRAINING</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: 15
                            }}
                        >
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? COLORS.primary : COLORS.black,
                                    fontSize: 12
                                }}
                            >PROFILE</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;