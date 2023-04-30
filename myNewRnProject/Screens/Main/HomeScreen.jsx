import {
  Text,
  View,
} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';

const HomeTab = createBottomTabNavigator();

export const HomeScreen = () => { 
  return (
      <HomeTab.Navigator>
      <HomeTab.Screen name="Posts" component={PostsScreen}/>
      <HomeTab.Screen name='CreatePosts' component={CreatePostsScreen}/>
      <HomeTab.Screen name='Profile' component={ProfileScreen}/>
      </HomeTab.Navigator>

    )
}