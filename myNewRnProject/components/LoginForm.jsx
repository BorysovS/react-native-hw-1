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
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  const { height, width } = useWindowDimensions();

  const handleSubmit = () => { 
    if (
      !dataUser.email ||
      !dataUser.password ) {
      alert('Please entry all fields!!!');
    }
    setIsFocused(false);
    Keyboard.dismiss();
    console.log(dataUser);
    setDataUser(initialState);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss(), setIsFocused(false);
    }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={{
          ...styles.loginForm,
          maxHeight: isFocused ? 230 : null,
          paddingBottom: height <= 420 ? 15 : 111,
    }}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Sign In</Text>
            <View style={{marginBottom: 16}}>
              <TextInput style={{ ...styles.input }}
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                borderColor={loginBorderColor}
                onChangeText={value => {
                  setDataUser(pervstate => ({
                    ...pervstate,
                    email: value,
                  }))
                }}
                onFocus={() => {
                  setIsFocused(true),
                  setLoginBorderColor(accentBorderColor);
                }}
                onBlur={() => setLoginBorderColor(defaultBorderColor)}
                value={dataUser.email}></TextInput>
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
                onChangeText={value => { 
                  setDataUser(pervstate => ({
                    ...pervstate,
                    password: value,
                  }))
                }}
                onBlur={() => setPassBorderColor(defaultBorderColor)}
                value={dataUser.password}></TextInput>
          <TouchableOpacity style={styles.hiddenPass} onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.textPassHidden}>{showPassword ? 'Show' : 'Hidden'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {navigation.navigate("Registration")}}>
            <Text>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
}
