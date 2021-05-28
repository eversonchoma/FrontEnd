import React from 'react';
import {
            StyleSheet, 
            Text, 
            View,
            Image,
            Dimensions,
        } from 'react-native';
import colors from '../styles/colors';
import {StatusBar} from 'react-native';
import Symbol from '../../assets/favicon.png';
import fonts from '../styles/fonts';

export default function Header(){
    return (
        <View style={styles.container} >
            <StatusBar 
            ></StatusBar>

            

            <View>
                <Text style={styles.text}>
                    Olá, Everson!
                </Text>

                <Text style={styles.textData}>
                    27/05/2021
                </Text>
            </View>

            <Image source={Symbol} style={styles.symbol}></Image>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.white,
        padding: 10,
    },
    image: {
      height: Dimensions.get('window').width * 0.7,
      width: Dimensions.get('window').width * 0.7
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: fonts.heading,
        color: colors.blue_bay_of_many,
    },
    textData: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: fonts.heading,
        color: colors.blue_bay_of_many,
        lineHeight: 50,
    },
    symbol: {
        height: 40,
        width: 40,
        padding: 40,
    }
});