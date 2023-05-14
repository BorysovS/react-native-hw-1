import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { postItem } from '../styles/styles';
import { Feather } from '@expo/vector-icons'
import { useState } from 'react';

export const PostItem = ({ post }) => { 
  const [countComments, setCountComments] = useState(0)

    return (
      <View style={{paddingHorizontal: 16, marginBottom: 32}}>
        <Image source={{ uri: post.item.photo }} style={postItem.postPhoto} />
        <Text style={postItem.postTitle}>{post.item.name}</Text>
        <View style={postItem.postDiscription}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="message-circle" size={24} color="#BDBDBD" />
            <Text style={{color: '#BDBDBD'}}>{countComments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="map-pin" size={24} color="#BDBDBD" />
            <Text>{post.item.location}</Text></TouchableOpacity>
        </View>
        </View>
    )
}