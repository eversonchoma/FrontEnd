import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes  from './src/routes/index';
import {
  useFonts,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,

} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light, 
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}