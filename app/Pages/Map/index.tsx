import * as React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function Map() {

  const [pesquisa, setPesquisa] = useState('');
   // useState recebe objeto com todos os parametros
    let [regiao, setRegiao] = useState({
        latitude:-23.4422149,
        longitude:-46.9235461, 
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
    });
    let [newCoordenada, setNewCoordenada] = useState({
        latitude: 0.014,
        longitude: 0.014
    });
  return (
    <View style={styles.container}>
      
      <View style={styles.inputGoogle}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
      />
    </View>
      
      <MapView style={{width:'100%',height:'80%'}} initialRegion={regiao}>
        <Marker coordinate={newCoordenada}>
        </Marker>
      </MapView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
  inputGoogle: {
    flex: 1,
    padding: 10,
    width:'100%',
    marginTop:'10%',
  },
 
});