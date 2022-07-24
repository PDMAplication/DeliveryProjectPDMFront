import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View,StyleSheet, Text, Image } from 'react-native';
import acessaBackend from '../../api/axios';


interface IResponse{
  status: string;
}
export const Solicitar: React.FC = () => {
const [email, setEmail] = useState('');
const [status, setStatus]= useState('');
const handleLogar = async () => {
const data ={
  email,
}

  const response = await acessaBackend.post('Solicitar Nova Senha',data);
  const {status} = response.data as IResponse;
  if(status === 'error'){
    setStatus('Erro: Email não valido');
  }else{
    setStatus('Verificar email');
  }
}

  return (
  
  <View style={styles.container}>
   <Image style={styles.logo} source={require('../../assets/Logo.png')} />
    <TextInput 
      style={styles.input}
      placeholder="   E-mail"
      value={email}
      onChangeText={setEmail}
    />
    <Button title="Entrar" onPress={handleLogar}/>
  </View>
  
);
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    padding:150,
    backgroundColor:'#fff',
    marginTop:0,
  
  },
 
  input:{
    height:54,
    width:300,
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    marginBottom:10,
    backgroundColor:'#fff',
  },
  logo:{
    height:50,
    width:200,
    marginBottom:20,
  },
  text:{
    fontSize:30,
  },
  link:{
    fontSize:25,
    color:'#fb9400',

  },
})

