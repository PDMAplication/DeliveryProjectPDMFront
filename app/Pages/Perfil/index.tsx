import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from "react-native";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

import * as ImagePicker from 'expo-image-picker'

export const Perfil = () => {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)
  
  useEffect(()=>{
    (async()=>{
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleryPermission(galleryStatus.status==='granted')
    })()
  },[])

  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      quality:1,
    }) 
    console.log(result)

    // if(!result.cancelled){
    //   setImage(result.uri)
    // }

    if(result.cancelled===false){
      setImage(result.uri)
    }
  }

    if(hasGalleryPermission===false){
      return <Text>Sem acesso ao armazenamento</Text>
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 5, width: 30, marginTop: 20 }}>
        <Feather name="arrow-left" size={24} color="orange" />
      </TouchableOpacity>

      <View style={styles.perfilSection}>
        <Text style={{ fontSize: 30, alignSelf: "center" }}>Perfil</Text>
        {image && <Image source={{uri:image}} style={{height:100,width:100, alignSelf:'center',borderRadius:100}} />}
      </View>

      <View>
        <TextInput style={styles.input} placeholder=" Nome Usuário" />
        <TextInput style={styles.input} placeholder=" Email" />
        <TextInput style={styles.input} placeholder=" Nova senha" />

        <TouchableOpacity onPress={()=>pickImage()}  style={styles.uploadButton}>
          <FontAwesome5 name="file-upload" size={24} color="black" />
          <Text style={{ color: "white" }}>Escolher imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEdit}>
          <Text
            style={{ color: "white", fontSize: 15, justifyContent: "center" }}
          >
            Editar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  perfilSection: {
    padding:5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottomColor: "orange",
    borderBottomWidth: 1,
  },
  uploadButton: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: "grey",
    width: 100,
    borderRadius: 20,
  },
  input: {
    height: 40,
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    fontSize: 15,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  buttonEdit: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 15,
    marginTop: 5,
    color: "white",
    width: "90%",
    alignSelf: "center",
  },
});
