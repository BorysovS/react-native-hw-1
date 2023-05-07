import { Text, View, TouchableOpacity, useWindowDimensions, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { postStyle, styles } from '../../styles/styles';
import { CreatePostForm } from '../../components/CreatePostForm';


export const CreatePostsScreen = () => {
  const { width, height } = useWindowDimensions();


  return (
    <View style={styles.container}>
        <ScrollView>
        <CreatePostForm />
        </ScrollView>
      </View>
  )
};
