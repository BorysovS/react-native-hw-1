import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import { styles} from '../styles/styles';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from 'react-native';


const initialState = {
  userLogin: '',
  userMail: '',
  userPassword: '',
};

const defaultBorderColor = '#E8E8E8';
const accentBorderColor = '#FF6C00';


export const RegistrationForm = () => { 
    const [isFocused, setIsFocused] = useState(false);
  const [dataUserState, setDataUserState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  // bordercolors
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);
  // const [picture, setPicture] = useState("");
  const [image, setImage] = useState(null);
  const { height, width } = useWindowDimensions();

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // form submit
  const onSubmit = () => {
    if (
      !dataUserState.userLogin ||
      !dataUserState.userMail ||
      !dataUserState.userPassword
    ) {
      alert('Please entry all fields!!!');
    }
    setIsFocused(false);
    Keyboard.dismiss();
    console.log(dataUserState);
    setDataUserState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(), setIsFocused(false);
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{
            ...styles.regBox,
            paddingBottom: isFocused ? 32 : 92,
            paddingBottom: height <= 420 ? 8 : 45,
          }}>
          <View style={styles.form}>
            <View style={styles.avatar}>
              {image && <Image source={{ uri: image }} style={styles.img} />}
              {image ? (
                <TouchableOpacity
                  style={styles.btnAddActive}
                  activeOpacity={1}
                  onPress={() => setImage(null)}
                >
                  <AntDesign name="minus" size={24} color="#E8E8E8" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btnAdd}
                  activeOpacity={1}
                  onPress={pickImage}
                >
                  <AntDesign name="plus" size={24} color="#FF6C00" />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.formTitle}>Registration</Text>
            <View style={{ marginBottom: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                borderColor={loginBorderColor}
                onFocus={() => {
                  setIsFocused(true), setLoginBorderColor(accentBorderColor);
                }}
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
                onFocus={() => {
                  setIsFocused(true), setEmailBorderColor(accentBorderColor);
                }}
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
                style={{ ...styles.input, position: 'relative' }}
                placeholder="Password"
                secureTextEntry={showPassword}
                placeholderTextColor="#BDBDBD"
                borderColor={passBorderColor}
                onFocus={() => {
                  setIsFocused(true), setPassBorderColor(accentBorderColor);
                }}
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
                <Text style={styles.textPassHidden}>
                  {showPassword ? 'Show' : 'Hidden'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 16 }}>
              <TouchableOpacity style={styles.button} onPress={onSubmit}>
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity>
                <Text>Already have an account? Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   regBox: {
//     backgroundColor: '#FFFFFF',
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingTop: 92,
//     paddingBottom: 92,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   },

//   form: {
//     paddingHorizontal: 16,
//   },

//   avatar: {
//     position: 'absolute',
//     borderRadius: 16,
//     width: 120,
//     height: 120,
//     marginTop: -150,
//     backgroundColor: '#F6F6F6',
//     alignSelf: 'center',
//   },

//   img: {
//     borderRadius: 16,
//     width: 120,
//     height: 120,

//     alignSelf: 'center',
//   },

//   btnAdd: {
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     bottom: 14,
//     right: -12.5,
//     width: 25,
//     height: 25,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#FF6C00',
//     fill: '#FF6C00',
//   },

//   btnAddActive: {
//     position: 'absolute',
//     bottom: 14,
//     right: -12.5,
//     width: 25,
//     height: 25,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#E8E8E8',
//     alignItems: 'center',
//   },

//   formTitle: {
//     color: '#212121',
//     fontFamily: 'Roboto-Medium',
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
//     fontFamily: 'Roboto-Regular',
//     fontWeight: '400',
//     fontSize: 16,
//   },

//   hiddenPass: {
//     position: 'absolute',
//     top: 16,
//     right: 16,
//   },

//   textPassHidden: {
//     color: '#1B4371',
//     fontFamily: 'Roboto-Regular',
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
//     fontFamily: 'Roboto-Regular',
//     color: '#FFFFFF',
//     lineHeight: 19,
//   },
// });
