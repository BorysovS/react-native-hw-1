import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.41596,
          longitude: 30.633509,
          latitudeDelta: 0.01,
          longitudeDelta: 0.001,
        }}
      >
        <Marker coordinate={{
          latitude: 50.41596,
          longitude: 30.633509,}}/>
      </MapView>
    </View>
  );
};
