import React, { Component, useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';

export default class Pedidos extends Component{

  constructor(props){
     super(props)
     this.state = {date:''}
  }
  


  render(){
    return(
        <View style={styles.container}>
           <DatePicker>
            
           </DatePicker>
        </View>
      )
  }

  

}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})