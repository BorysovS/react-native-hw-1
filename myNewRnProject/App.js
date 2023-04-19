import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { styles } from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}
