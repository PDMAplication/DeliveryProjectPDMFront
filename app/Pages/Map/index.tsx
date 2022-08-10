import * as React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { useState } from 'react';

export default function Map() {

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
      <MapView style={{width:'100%',height:'100%'}} initialRegion={regiao}>
        <Marker coordinate={newCoordenada}>

        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
