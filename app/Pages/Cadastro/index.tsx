import React, {useState} from 'react';
import {View,Button,Text, StyleSheet, Alert, Image, TouchableOpacity} from 'react-native';
import {useForm, Controller} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { Ionicons } from '@expo/vector-icons';
import acessaBackend from '../../api/axios';
import {InputForm} from '../../components/InputForm';
import validationYup from '../../utils/validationYup';
import { Link } from '@react-navigation/native';


interface FormData{
  email:string;
  cpf:string;
  nome:string;
  password:string;
}

export const Cadastro: React.FC = () => {
    const {
      control, 
      handleSubmit,
      formState: { errors } 
    } = useForm({
      resolver:yupResolver(validationYup)
    });
  const salvar = async (formData:FormData) => {
    Alert.alert(
      'Success',
      `${formData.email} ${formData.cpf} ${formData.nome}`,
      [{text: 'ok'}],
    );
    const response = await acessaBackend.post('loginsimples',FormData);
  };
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass]= useState(true); 
  return (
    <View style={styles.Container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      <InputForm style={styles.Input}
        name="email"
        control={control}
        placeholder="  E-mail"
        keyboardType="email-address"
        error={errors.email? errors.email.message :''}
      />

      <InputForm style={styles.Input}
        name="nome"
        control={control}
        placeholder="  Nome"
        error={errors.nome? errors.nome.message :''}
      />
        <View style={styles.inputArea}>
        <InputForm style={styles.Input}
            name="password"
            control={control}
            placeholder="   Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={hidePass}
            error={errors.password? errors.password.message :''}
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
            <Button title="Entrar" color="fb9400" onPress={handleSubmit(salvar)}/>
        </View>
        <Text style={styles.text}>Ja tem cadastro?
        <Link style={styles.link} to="/Login/"> Fazer Login</Link>
        </Text>
     </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  logo:{
    height:50,
    width:200,
    marginBottom:20,
  },
  maskedInput: {
    flex: 1,
    fontSize: 20,
    height:54,
    width:300,
    borderBottomColor: '#fff',
    borderStyle: 'solid',
    textAlign:'center',
  },
  Input:{
    height:54,
    width:200,
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    marginBottom:10,
    backgroundColor:'#fff',
    textAlign:'center',
  },
  inputArea:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
  },
  icon:{
    width: '15%',
    height: 20,
    right:'16%',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:'5%',

  },
  button:{
    backgroundColor:'#fb9400',
    width: '80%',
    height:50,
    borderRadius:20,
    fontSize:30,
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
});