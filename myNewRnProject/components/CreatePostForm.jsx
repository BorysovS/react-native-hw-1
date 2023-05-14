import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { postStyle, styles } from '../styles/styles';
import { useEffect, useRef, useState } from 'react';

const initialState = {
  name: '',
  location: '',
};

export const CreatePostForm = ({navigation}) => {
  const [photo, setPhoto] = useState(null);
  const [postData, setPostData] = useState(initialState);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    try {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const onSubmit = () => {
    if (!postData.name || !postData.location || !photo) {
      alert('Please entry all fields!!!');
    }
    const data = {
      ...postData,
      photo,
    };
    console.log(data);
    navigation.navigate("Posts", {data})
    setPhoto(null);
      setPostData(initialState);
    
      
  };

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
          justifyContent: 'center',
        }}
      >
        <View style={{ marginBottom: 132 }}>
          <Camera
            type={type}
            ref={setCameraRef}
            style={{ ...postStyle.photoBox, overflow: 'hidden' }}
          >
            {photo && (
              <View style={{ width: '100%', height: '100%' }}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 240, width: '100%' }}
                />
              </View>
            )}
            <TouchableOpacity
              style={{
                ...postStyle.imgBtn,
                backgroundColor: photo ? 'transparent' : '#FFFFFF',
              }}
              onPress={takePhoto}
            >
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
          {photo ? (
            <TouchableOpacity>
              <Text
                style={postStyle.textCreatePost}
                onPress={() => {
                  setPhoto(null);
                }}
              >
                Delete photo
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Text style={postStyle.textCreatePost} onPress={pickImage}>
                Download photo
              </Text>
            </TouchableOpacity>
          )}
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={postStyle.createPostInput}
              placeholder="Photo name"
              placeholderTextColor="#BDBDBD"
              onChangeText={value => {
                setPostData(pervState => ({ ...pervState, name: value }));
              }}
              value={postData.name}
            ></TextInput>
          </View>
          <View style={{ marginBottom: 32, justifyContent: 'center' }}>
            <TextInput
              style={postStyle.locationInput}
              placeholder="Location..."
              placeholderTextColor="#BDBDBD"
              onChangeText={value => {
                setPostData(pervState => ({ ...pervState, location: value }));
              }}
              value={postData.location}
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
              backgroundColor:
                postData.name && postData.location && photo
                  ? '#FF6C00'
                  : '#F6F6F6',
            }}
            onPress={onSubmit}
          >
                      <Text style={{...postStyle.pubBtnText, color:
                postData.name && postData.location && photo
                  ? '#fff'
                  : '#BDBDBD',
              marginBottom: 'auto',}}>Publish</Text>
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
