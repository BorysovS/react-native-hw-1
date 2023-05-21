import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import { HomeScreen } from "../Screens/Main/HomeScreen";
import { MapScreen } from "../Screens/Main/MapScreen";
import { CommentsScreen } from "../Screens/Main/CommentsScreen";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const Layout = ({ navigation}) => {


    const isAuth = true;

    return (
    isAuth ? (
            <MainStack.Navigator initialRouteName="Home">
                <MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}/>
                <MainStack.Screen name="Map" component={MapScreen}/>
                <MainStack.Screen name="Comments" component={CommentsScreen}/>
        </MainStack.Navigator>
    ) :
        (<AuthStack.Navigator initialRouteName="LoginScreen">
            <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, }} />
            <AuthStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false, }} />
        </AuthStack.Navigator>
        )
    )
}

export default Layout