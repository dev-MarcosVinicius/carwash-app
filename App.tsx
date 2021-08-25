import React from 'react';
import { useFonts } from 'expo-font';
import {
  NunitoSans_200ExtraLight,
  NunitoSans_200ExtraLight_Italic,
  NunitoSans_300Light,
  NunitoSans_300Light_Italic,
  NunitoSans_400Regular,
  NunitoSans_400Regular_Italic,
  NunitoSans_600SemiBold,
  NunitoSans_600SemiBold_Italic,
  NunitoSans_700Bold,
  NunitoSans_700Bold_Italic,
  NunitoSans_800ExtraBold,
  NunitoSans_800ExtraBold_Italic,
  NunitoSans_900Black,
  NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
  
  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </Background>
  );
}
