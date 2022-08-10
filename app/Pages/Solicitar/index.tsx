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
   <Text style={styles.text}>
    Esqueceu sua senha ?
   </Text>
   <Text style={styles.newText}>
   Preencha o campo com seu e-mail e receba as instruções necessárias para redefinir  a sua senha.
   </Text>
    <TextInput 
      style={styles.input}
      placeholder="   E-mail"
      value={email}
      onChangeText={setEmail}
    />
    <View style={styles.button}>
      <Button title="Entrar" color="fb9400" onPress={handleLogar}/>
    </View>
  </View>
  
);
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
    marginTop:0,
  
  },
 
  input:{
    height:54,
    flexDirection:'row',
    width:'90%',
    fontSize:30,
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
  icon:{
    width: '15%',
    height: 30,
    right:'96%',
    justifyContent: 'center',
    alignItems:'center',

  },
  button:{
    backgroundColor:'#fb9400',
    width: '80%',
    height:50,
    borderRadius:20,
    fontSize:30,
  },
  newText:{
    textAlign:'center',
    fontSize:20,
    marginBottom:30,
    marginTop:20,
  }
})

