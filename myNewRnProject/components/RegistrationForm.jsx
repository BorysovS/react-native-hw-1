import { useState} from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../redux/auth/operation';


const initialState = {
  login: '',
  email: '',
  password: '',
  avatar: '',
};

const defaultBorderColor = '#E8E8E8';
const accentBorderColor = '#FF6C00';


export const RegistrationForm = () => { 
  const [isFocused, setIsFocused] = useState(false);
  const [dataUserState, setDataUserState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  // bordercolors
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);
  // const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setDataUserState( pervstate => ({ ...pervstate, avatar: result.assets[0].uri }));
    }
  };

  // form submit
  const onSubmit = () => {
    if (
      !dataUserState.login ||
      !dataUserState.email ||
      !dataUserState.password
    ) {
      alert('Please entry all fields!!!');
    }
    setIsFocused(false);
    Keyboard.dismiss();
    console.log(dataUserState)
    dispatch(authSignUpUser(dataUserState));
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
            maxHeight: isFocused ? 360 : null,
            paddingBottom: height <= 420 ? 8 : 45,
          }}>
          <View style={styles.form}>
            <View style={styles.avatar}>
              {dataUserState.avatar && <Image source={{ uri: dataUserState.avatar }} style={styles.img} />}
              {dataUserState.avatar ? (
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
                    login: value,
                  }))
                }
                value={dataUserState.login}
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
                    email: value,
                  }))
                }
                value={dataUserState.email}
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
                    password: value,
                  }))
                }
                value={dataUserState.password}
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
              <TouchableOpacity onPress={() => { navigation.navigate("Login")}}>
                <Text>Already have an account? Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

