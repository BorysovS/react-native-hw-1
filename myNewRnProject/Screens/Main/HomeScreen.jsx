import { Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';

const HomeTab = createBottomTabNavigator();

const tabBarOption = ({route}) => ({ 
  tabBarShowLabel: false,
  tabBarButton: (props) => <TouchableOpacity {...props} />,
  tabBarIcon: ({ focused, color, size }) => { 
    if (route.name === "Posts") { 
      return <Feather name="grid" size={24} color={color} />
    }
    if (route.name === 'CreatePosts') { 
      return <Feather name="plus" size={24} color={ color}/>
    }
    if (route.name === 'Profile') { 
      return <Feather name="user" size={24} color={ color}/>
    }
  },
  tabBarActiveTintColor: '#FFFFFF',
  tabBarActiveBackgroundColor: '#FF6C00',
  tabBarItemStyle: {
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  tabBarStyle: {
    display: route.name === 'CreatePosts' ? 'none' : 'flex',
    height: 83,
    paddingTop: 9,
    paddingHorizontal: 59,
    backgroundColor: '#FFFFFF',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowRadius: 0,
  },
  headerTitleStyle: {
            fontWeight: 500,
  },
  headerStyle: {
            backgroundColor: '#FFFFFF',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: {
              width: 0,
              height: 0.5,
            },
            shadowRadius: 0,
          },
})

export const HomeScreen = ({ navigation }) => {
  return (
    <HomeTab.Navigator screenOptions={tabBarOption}>
      <HomeTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Feather
                name="log-out"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
          // headerStyle: {
          //   backgroundColor: '#FFFFFF',
          //   shadowColor: 'rgba(0, 0, 0, 0.3)',
          //   shadowOffset: {
          //     width: 0,
          //     height: 0.5,
          //   },
          //   shadowRadius: 0,
          // },
          // headerTitleStyle: {
          //   fontWeight: 500,
          // }
        }}
      />
      <HomeTab.Screen name="CreatePosts" component={CreatePostsScreen} options={{ headerLeft: () => (<TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigation.goBack()}><Feather name="arrow-left" size={24} color="rgba(33, 33, 33, 0.8)" /></TouchableOpacity>)}}/>
      <HomeTab.Screen name="Profile" component={ProfileScreen} options={{ headerLeft: () => (<TouchableOpacity style={{marginLeft: 16}} onPress={() => navigation.goBack()}><Feather name="arrow-left" size={24} color="rgba(33, 33, 33, 0.8)" /></TouchableOpacity>)}}/>
    </HomeTab.Navigator>
  );
};
