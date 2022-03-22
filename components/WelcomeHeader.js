import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants'


const WelcomeHeader = ({ }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 40,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}
        >
            {/* Greetings */}
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >Welcome to the3percent</Text>
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.h3
                    }}
                >John Doe</Text>
            </View>
            {/* Avatar */}

        </View>
    )
}

export default WelcomeHeader;
