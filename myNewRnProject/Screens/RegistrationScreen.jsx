import { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
    Keyboard,
  useWindowDimensions
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
  userLogin: '',
  userMail: '',
  userPassword: '',
};

export default function RegistrationScreen() {
  const [isFocused, setIsFocused] = useState(false);
    const [dataUserState, setDataUserState] = useState(initialState);
    const { height, width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
    
//     useEffect(() => {
//         const onChange = () => { 
//             const width = Dimensions.get('window').width;
//         }
//    }, [])
    

  const keyboardHide = () => {
    setIsFocused(false);
    Keyboard.dismiss();
    console.log(dataUserState);
    setDataUserState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{ ...styles.regBox, paddingBottom: isFocused ? 32 : 92, paddingBottom: height <= 420 ? 8 : 45, }}
          onLayout={onLayoutRootView}
        >
          <View style={styles.form}>
            <Text style={styles.formTitle}>Registration</Text>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsFocused(true)}
                onChangeText={value =>
                  setDataUserState(pervState => ({
                    ...pervState,
                    userLogin: value,
                  }))
                }
                value={dataUserState.userLogin}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsFocused(true)}
                onChangeText={value =>
                  setDataUserState(pervState => ({
                    ...pervState,
                    userMail: value,
                  }))
                }
                value={dataUserState.userMail}
              />
            </View>
            <View style={{ marginBottom: 43 }}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsFocused(true)}
                onChangeText={value =>
                  setDataUserState(pervState => ({
                    ...pervState,
                    userPassword: value,
                  }))
                }
                value={dataUserState.userPassword}
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <TouchableOpacity style={styles.button} onPress={keyboardHide}>
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text>Already have an account? Log in</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  regBox: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 92,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  form: {
    paddingHorizontal: 16,
  },

  formTitle: {
      color: '#212121',
      fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
  },

  button: {
    paddingVertical: 16,
    width: 353,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 16,
      fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    lineHeight: 19,
  },
});
