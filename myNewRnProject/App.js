import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { styles } from './styles/styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './components/Layout';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        <Layout />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
