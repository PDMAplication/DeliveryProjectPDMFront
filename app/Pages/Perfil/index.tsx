import React, { useState } from "react";
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

export const Perfil = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 5, width: 30, marginTop: 20 }}>
        <Feather name="arrow-left" size={24} color="orange" />
      </TouchableOpacity>

      <View style={styles.perfilSection}>
        <Text style={{ fontSize: 30, alignSelf: "center" }}>Perfil</Text>
        <Entypo
          style={{ alignSelf: "center", padding: 6 }}
          name="user"
          size={50}
          color="black"
        />
      </View>

      <View>
        <TextInput style={styles.input} placeholder=" Nome Usuário" />
        <TextInput style={styles.input} placeholder=" Email" />
        <TextInput style={styles.input} placeholder=" Nova senha" />
        <TextInput style={styles.input} placeholder=" Upload de imagem" />

        <TouchableOpacity style={styles.uploadButton}>
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
