import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './src/theme';
import { Widget } from './src/components/Widget';import React from 'react';
;

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: theme.colors.background }}
      behavior={"height"}
      enabled  
      keyboardVerticalOffset={0}
    >
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
      <Widget />
    </KeyboardAvoidingView>
  );
};
