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
} from 'react-native';

export default function RegistrationScreen() {
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.regBox}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Registration</Text>
          <View style={{ marginBottom: 16 }}>
            <TextInput style={styles.input} placeholder="Login" placeholderTextColor='#BDBDBD'/>
          </View>
          <View style={{ marginBottom: 16 }}>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor='#BDBDBD'/>
          </View>
          <View style={{ marginBottom: 43 }}>
            <TextInput
              style={styles.input}
              placeholder="Password"
                          secureTextEntry={true}
                          placeholderTextColor='#BDBDBD'
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
                  <View style={{alignItems: 'center'}}>
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
    fontWeight: '500',
    fontSize: 30,
    textAlign: 'center',
    letterSpacing: 0.01,
    marginBottom: 32,
  },

  input: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#212121',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    minWidth: 343,
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
});
