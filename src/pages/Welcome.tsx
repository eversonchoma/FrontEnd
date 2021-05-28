import React from 'react';
import {  StyleSheet, 
          Text, 
          View, 
          Image, 
          Dimensions,
          TouchableOpacity,
          SafeAreaView,
        } from 'react-native';

import FPLogo from '../../assets/FPlogo.png';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function App() {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('MainPage');
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.container}>
        <Text style={styles.title}>GIP</Text>
        <Text style={styles.subTitle}>Gestão Interna de Pedidos</Text>

        <Image
          source={FPLogo}
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity 
              style={styles.button}
              activeOpacity={0.6} 
              onPress={handleStart}
        >
              
              <Text style={styles.buttonText}>

                  <Entypo
                    name="login" 
                    style={styles.buttonIcon} 
                  />

              </Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: colors.blue_bay_of_many,
    fontFamily: fonts.BigTitle,
  },
  image: {
    height: Dimensions.get('window').width * 0.8,
    width: Dimensions.get('window').width * 0.8
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_bay_of_many,
    fontFamily: fonts.heading,
  },
  button: {
    backgroundColor: colors.blue_bay_of_many,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 50,
    height: 50,
    paddingHorizontal: 10,
  },
  buttonText: {
      color: '#fff5ee',
      fontSize: 25,
  },
  buttonIcon: {
    fontSize: 25,
    color: colors.white,
  }
});
