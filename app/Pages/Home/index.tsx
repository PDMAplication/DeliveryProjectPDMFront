import React, {useState} from 'react';
import {View,Text, StyleSheet, Alert, Image, TouchableOpacity, TextInput} from 'react-native';
import {useForm, Controller} from'react-hook-form';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Ionicons } from '@expo/vector-icons';
import acessaBackend from '../../api/axios';
import { Link } from '@react-navigation/native';
import { Input } from 'react-native-elements';


interface FormData{
  nome:string;
}

export const Home: React.FC = () => {
   
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const [pesquisa, setPesquisa] = useState('');  
  return (
    <View style={styles.Container}>
      <Text style ={styles.textoInit} >Seja Bem-Vindo</Text>
       <Menu style={styles.menu}
        visible={visible}
        anchor={
          <TouchableOpacity style ={styles.iconMenu} >
            <Ionicons name="menu" onPress={showMenu} color="#fb9400" size={25}/>
          </TouchableOpacity>
      }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
        <View style={styles.inputArea}>
            <TextInput 
                style={styles.input}
                placeholder="   pesquisa"
                value={pesquisa}
                onChangeText={setPesquisa}
            />
            <TouchableOpacity style ={styles.icon} >
                <Ionicons name="search" color="#fb9400" size={25}/>
            </TouchableOpacity>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginStart:2,
    marginTop:"5%",
    width:'100%'
  },
  input:{
    height:54,
    width:'100%',
    fontSize:20,
    borderRadius:20,
    borderWidth:1,
    backgroundColor:'#fff',
    textAlign:'center',
    marginLeft:20,
  },
  inputArea:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:60,
  },
  icon:{
    width: '15%',
    height: 20,
    right:'80%',
    flexDirection:'row-reverse',
    justifyContent: 'center',
    alignItems:'center',

  },
  iconMenu:{
    width: '105%',
    height: 50,
    marginHorizontal:"1000%",
    flexDirection:'row',
    marginBottom:"80%",

  },
  button:{
    backgroundColor:'#fb9400',
    width: '80%',
    fontSize:'40%',
  },
  text:{
    marginBottom:20,
    marginTop:40,
    fontSize:20,
    flexDirection:'row',
    alignItems:'center'
  },
  menu:{
    flexDirection:'row',
    marginBottom:100,
    width:"13%",
    height:80,
    left:'80%'
  },
  link:{
    color:'#fb9400',

  },
  textoInit:{
    fontSize:40,
    marginEnd:"50%"
  }
});