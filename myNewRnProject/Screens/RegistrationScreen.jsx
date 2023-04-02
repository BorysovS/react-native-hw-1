import { useState, useCallback, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View,
  Image,
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

const defaultBorderColor = "#E8E8E8";
const accentBorderColor = "#FF6C00";
const placeholderTextColor = "#bdbdbd";

export default function RegistrationScreen() {
  const [isFocused, setIsFocused] = useState(false);
  const [dataUserState, setDataUserState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  // bordercolors
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);
  const [picture, setPicture] = useState("");
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
    

  const onSubmit = () => {
    setIsFocused(false);
    Keyboard.dismiss();
    console.log(dataUserState);
    setDataUserState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(), setIsFocused(false)}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{ ...styles.regBox, paddingBottom: isFocused ? 32 : 92, paddingBottom: height <= 420 ? 8 : 45, }}
          onLayout={onLayoutRootView}
        >
          <View style={styles.form}>
            <View style={styles.avatar}>
              <Image source={require('../assets/images/avatar.png')} style={styles.img} />
              <TouchableOpacity
                style={styles.btnAddActive}
                activeOpacity={1}
              >
                <Ionicons name="close-outline" size={24} color="#E8E8E8" />
              </TouchableOpacity>
            </View>
            <Text style={styles.formTitle}>Registration</Text>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                borderColor={loginBorderColor}
                onFocus={() => { setIsFocused(true), setLoginBorderColor(accentBorderColor) }}
                onBlur={() => setLoginBorderColor(defaultBorderColor)}
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
                borderColor={emailBorderColor}
                onFocus={() => { setIsFocused(true), setEmailBorderColor(accentBorderColor) }}
                onBlur={() => setEmailBorderColor(defaultBorderColor)}
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
                style={{ ...styles.input, position: "relative" }}
                placeholder="Password"
                secureTextEntry={showPassword}
                placeholderTextColor="#BDBDBD"
                borderColor={passBorderColor}
                onFocus={() => { setIsFocused(true), setPassBorderColor(accentBorderColor) }}
                onBlur={() => setPassBorderColor(defaultBorderColor)}
                onChangeText={value =>
                  setDataUserState(pervState => ({
                    ...pervState,
                    userPassword: value,
                  }))
                }
                value={dataUserState.userPassword}
              />
              <TouchableOpacity
                style={styles.hiddenPass}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.textPassHidden}>{showPassword ? "Show" : "Hidden"}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 16 }}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
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

  avatar: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 120,
    position: "absolute",
    bottom: 32,
    borderRadius: 16,
  },

  btnAdd: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
  },

  btnAddActive: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E8E8E8",
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

  hiddenPass: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  textPassHidden: {
    color: "#1B4371",
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
