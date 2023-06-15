import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import { HomeScreen } from "../Screens/Main/HomeScreen";
import { MapScreen } from "../Screens/Main/MapScreen";
import { CommentsScreen } from "../Screens/Main/CommentsScreen";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {selectIsAuth } from '../redux/auth/selectors'
import { useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../redux/auth/authSlice";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const Layout = ({ navigation }) => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => { 
            if (user) { 
                const userData = {
                    userId: user.uid,
                    userAvatar: user.photoURL,
                    userName: user.displayName,
                    userEmail: user.email,
                    isAuth: true,
                }
                dispatch(getCurrentUser(userData))
            }  
        })
    
    }, [])
    



    // const isAuth = false;

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