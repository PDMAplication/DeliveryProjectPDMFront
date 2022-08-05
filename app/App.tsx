import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Login } from './Pages/Login';
import Routes from './Routes/Routes';
import { Produto } from './Pages/Produto';
import { Cadastro } from './Pages/Cadastro';


export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/*<Produto/>*/}
      {<Routes/>}
      {/*<Cadastro/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});