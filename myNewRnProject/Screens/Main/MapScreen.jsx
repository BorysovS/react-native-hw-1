import {
  Text,
  View,
} from 'react-native';
import MapView, { Marker } from "react-native-maps";

export const MapScreen = () => { 
    return (
        <View style={{flex: 1}}>
        <MapView >
          <Marker />
            </MapView>
            </View>
    )
}