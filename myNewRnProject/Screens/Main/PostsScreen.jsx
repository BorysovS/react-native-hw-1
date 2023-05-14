import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import { profileStyle, styles } from '../../styles/styles';
import { PostItem } from '../../components/PostItem';


export const PostsScreen = ({ route }) => { 
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    if (route.params) {
      const { data } = route.params;
      console.log(data);
      setPosts(pervState => [...pervState, data])
    }
  
  }, [route.params]) 
  
  // console.log('routeparams', route.params.data);
  return (
      <View>
        <View style={profileStyle.profileBox}>
          <Image source={require('../../assets/images/bombAvatar.jpeg')} style={{ width: 60, height: 60, borderRadius: 16 }} />
          <View style={profileStyle.profileContact}>
          <Text style={profileStyle.profileName}>Bomb</Text>
            <Text style={profileStyle.profileEmail}>BombBoom@mail.com</Text>
            </View>
      </View>
      <FlatList data={posts} keyExtractor={(item, idx) => idx.toString()} renderItem={(item) => (<PostItem post={item} />)} />
      </View>
    )
}