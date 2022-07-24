import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, TextInput, View,StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import acessaBackend from '../../api/axios';
import { Ionicons } from '@expo/vector-icons';


interface IResponse{
  status: string;
}
export const Login: React.FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [status, setStatus]= useState('');
const handleLogar = async () => {
const data ={
  email,
  password
}

  const response = await acessaBackend.post('loginsimples',data);
  const {status} = response.data as IResponse;
  if(status === 'error'){
    setStatus('Erro: acesso negado');
  }else{
    setStatus('logado');
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
    <View style={styles.inputArea}>
      <TextInput 
        style={styles.input}
        placeholder="   Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style ={styles.icon}>
        <Ionicons name="eye" color="#fb9400" size={25}/>
      </TouchableOpacity>
    </View>
    <View style={styles.button}>
      <Button title="Entrar" onPress={handleLogar}/>
    </View>
    

    <Text>{status}</Text>
    <Text style={styles.text}>Esqueceu a senha?</Text>
    <Link style={styles.link} to="/Solicitar/">clique aqui</Link>
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
  link:{
    fontSize:25,
    color:'#fb9400',

  },
  inputArea:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  icon:{
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems:'center',

  },
  button:{
    backgroundColor:'#fb9400',
    width: '100%'
  }
})

