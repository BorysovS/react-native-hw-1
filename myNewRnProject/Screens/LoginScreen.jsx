import { View, StyleSheet, ImageBackground } from "react-native";
import LoginForm from "../components/LoginForm";

export default function LoginScreen() { 
    return (
        <View style={styles.container}>
        <ImageBackground
        source={require('../assets/images/photoBG.jpg')}
                style={styles.image}>
                <LoginForm />
                
      </ImageBackground>
        </View>
    )
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
});