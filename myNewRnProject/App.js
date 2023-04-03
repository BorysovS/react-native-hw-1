import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/photoBG.jpg')}
        style={styles.image}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  text: {
    color: 'white',
    textAlign: 'center',
  },
});
