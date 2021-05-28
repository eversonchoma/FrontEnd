import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.6}
            {...rest}
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue_bay_of_many,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 50,
        height: 50,
        paddingHorizontal: 10
    },
    buttonText: {
        color: '#fff5ee',
        fontSize: 25,
    }
});


