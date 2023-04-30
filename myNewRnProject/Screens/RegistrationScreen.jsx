import {  useCallback } from 'react';
import {
  View,
  ImageBackground
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RegistrationForm } from '../components/RegistrationForm';
import { styles} from '../styles/styles';


export default function RegistrationScreen() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });
  // fonts
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
     <ImageBackground
        source={require('../assets/images/photoBG.jpg')}
                style={styles.image}>
        <RegistrationForm />
                
      </ImageBackground> 
    </View>
  );
}

