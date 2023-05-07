import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { postStyle, styles } from '../styles/styles';

export const CreatePostForm = () => {
  const { width, height } = useWindowDimensions();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: 16,
        paddingVertical: 32,
          justifyContent: 'center'
        }}
      >
        <View style={{ marginBottom: 132}}>
            <View style={{ ...postStyle.photoBox }}>
            <TouchableOpacity style={postStyle.imgBtn}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={postStyle.textCreatePost}>Download photo</Text>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={postStyle.createPostInput}
              placeholder="Photo name"
              placeholderTextColor="#BDBDBD"
            ></TextInput>
          </View>
          <View style={{ marginBottom: 32, justifyContent: 'center' }}>
            <TextInput
              style={postStyle.locationInput}
              placeholder="Location..."
              placeholderTextColor="#BDBDBD"
            />
            <Feather
              style={{ position: 'absolute' }}
              name="map-pin"
              size={24}
              color="#BDBDBD"
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#F6F6F6',
              marginBottom: 'auto',
            }}
          >
            <Text style={postStyle.pubBtnText}>Publish</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={postStyle.trashBtn}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
