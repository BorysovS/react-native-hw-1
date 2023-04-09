import { useState } from 'react';
import { styles} from '../styles/styles';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Keyboard,
  ScrollView
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};


const defaultBorderColor = '#E8E8E8';
const accentBorderColor = '#FF6C00';

export default function LoginForm() {
  const [dataUser, setDataUser] = useState(initialState)
  const [isFocused, setIsFocused] = useState(false);
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);
  const [showPassword, setShowPassword] = useState(true);

  const { height, width } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss(), setIsFocused(false);
    }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={{
      ...styles.loginForm, paddingBottom: isFocused ? 32 : 111,
      paddingBottom: height <= 420 ? 15 : 111,
    }}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Sign In</Text>
            <View style={{marginBottom: 16}}>
              <TextInput style={{...styles.input }}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                borderColor={loginBorderColor}
                onFocus={() => {
                  setIsFocused(true), setLoginBorderColor(accentBorderColor);
                }}
                onBlur={() => setLoginBorderColor(defaultBorderColor)}></TextInput>
        </View>
            <View style={{marginBottom: 42}}>
              <TextInput style={styles.input}
                placeholder="Password"
                secureTextEntry={showPassword}
                placeholderTextColor="#BDBDBD"
                borderColor={passBorderColor}
                onFocus={() => {
                  setIsFocused(true), setPassBorderColor(accentBorderColor);
                }}
                onBlur={() => setPassBorderColor(defaultBorderColor)}></TextInput>
          <TouchableOpacity style={styles.hiddenPass} onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.textPassHidden}>{showPassword ? 'Show' : 'Hidden'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity>
            <Text>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   loginForm: {
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingTop: 32,
//     paddingBottom: 111,
//     height: 489,
//   },

//   form: {
//     paddingHorizontal: 16,
//   },

//   formTitle: {
//     color: '#212121',
//     fontWeight: '500',
//     fontSize: 30,
//     textAlign: 'center',
//     letterSpacing: 0.01,
//     marginBottom: 32,
//   },

//   input: {
//     borderWidth: 1,
//     borderRadius: 8,
//     borderColor: '#E8E8E8',
//     backgroundColor: '#F6F6F6',
//     height: 50,
//     padding: 16,
//     fontWeight: '400',
//     fontSize: 16,
//   },

//   button: {
//     paddingVertical: 16,
//     width: 353,
//     backgroundColor: '#FF6C00',
//     borderRadius: 100,
//     alignItems: 'center',
//   },
//   btnText: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#FFFFFF',
//     lineHeight: 19,
//   },
//   textPassHidden: {
//     color: '#1B4371',
//     fontFamily: 'Roboto-Regular',
//     fontWeight: '400',
//     fontSize: 16,
//   },
//   hiddenPass: {
//     position: 'absolute',
//     top: 16,
//     right: 16,
//   },
// });
