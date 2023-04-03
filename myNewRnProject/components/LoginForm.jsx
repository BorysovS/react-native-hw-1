import { useState } from 'react';
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
  useWindowDimensions,
  Keyboard,
} from 'react-native';

export default function LoginForm() {
  const [isFocused, setIsFocused] = useState(false);

  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.loginForm}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Sign In</Text>
        <View>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <TextInput style={styles.input}></TextInput>
          <TouchableOpacity style={styles.hiddenPass}>
            <Text style={styles.textPassHidden}>Show</Text>
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
  );
}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 111,
    height: 489,
  },

  form: {
    paddingHorizontal: 16,
  },

  formTitle: {
    color: '#212121',
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    height: 50,
    padding: 16,
    fontWeight: '400',
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
    color: '#FFFFFF',
    lineHeight: 19,
  },
  textPassHidden: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
  },
  hiddenPass: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});
