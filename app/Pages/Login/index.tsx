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
const [hidePass, setHidePass]= useState(true); 
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
        secureTextEntry={hidePass}
      />
      <TouchableOpacity style ={styles.icon} onPress={ () => setHidePass(!hidePass)}>
        {hidePass ?
          <Ionicons name="eye" color="#fb9400" size={25}/>
          :
          <Ionicons name="eye-off" color="#fb9400" size={25}/>
        }
      </TouchableOpacity>
    </View>
    <View style={styles.button}>
      <Button title="Entrar" color="fb9400" onPress={handleLogar}/>
    </View>
    

    <Text>{status}</Text>
      <Text style={styles.text}>Esqueceu a senha?
      <Link style={styles.link} to="/Solicitar/"> clique aqui</Link>
      </Text>
     

    
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
    marginBottom:20,
    marginTop:40,
    fontSize:20,
    flexDirection:'row',
    alignItems:'center'
  },
  link:{
    color:'#fb9400',

  },
  inputArea:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:50,
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
  }
})

