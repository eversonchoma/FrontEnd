import React from 'react';
import { 
        StyleSheet, 
        Text, 
    } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface AreaButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export default function AreaButton({ 
    title, 
    active = false,
    ...rest }: AreaButtonProps)
{
    return (
        <RectButton 
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            activeOpacity={0.6}
            {...rest}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </RectButton>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        height: 40,
        width: 70,
        marginRight: 5
    },
    containerActive: {
        backgroundColor: colors.blue_light,
    },
    buttonText: {
        color: colors.blue_bay_of_many,
        fontSize: 20,
        fontFamily: fonts.text,
    }
});


