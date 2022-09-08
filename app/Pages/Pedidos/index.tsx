import React, { Component, useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image, SafeAreaView, Button } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function App() {
 
  const [datePicker, setDatePicker] = useState(false);
 
  const [date, setDate] = useState(new Date());
 
  

  function showDatePicker() {
    setDatePicker(true);
  };
 
  function onDateSelected(event, value) {
    console.log(value)
    setDate(value);
    setDatePicker(false);
  };

  return (


    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
         
       <View style={styles.top}>
        
          <TouchableOpacity style={ {padding:5,margin:3,left:0}}>
              <Feather name="arrow-left" size={24} color="orange" />
          </TouchableOpacity>

          <Text style={{ color: 'black', fontSize:20, marginLeft:100 }}>Meus Pedidos</Text>

       </View>

     
        <View style={styles.pedido}>

          <Text style={{ color: 'white', fontSize:30, marginTop:40, textAlign:'center' }}>Escolha uma data para o pedido</Text>
          
          <View style={styles.data}>
             <MaterialIcons  style={styles.icon} name="date-range" size={25} color="orange" />
              <Text style={styles.text}>Data = {date.toLocaleDateString()}</Text>
          </View>
          
          {!datePicker && (
          <View style={{ margin: 10 }}>
            <Button title="Escolher Data" color="#9896a4" onPress={showDatePicker} />
          </View>
        )}
        </View>

        <TouchableOpacity style={styles.buttonList} >
            <Text style={{color:'white', fontSize:20}}>Listar</Text>
        </TouchableOpacity>
 
     
 
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={'default'}
            is24Hour={false}
            onChange={onDateSelected}
          />
        )}
 
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
  },
 top:{
  flexDirection:'row',
  alignItems:'center',
  marginTop:25,
  padding:2,
  width:400
 },
 icon:{
  
  backgroundColor:'white',
  borderRadius:20,
  padding:10
 },
 data:{
  width:350,
  alignSelf:'center',
  marginTop:50,
  borderRadius:5,
  backgroundColor:'white',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'center'
 },
 pedido:{
   backgroundColor:'orange',
   height:300,
   width:400,
   padding:10,
 },
  text: {
    marginTop:5,
    fontSize: 25,
    color: 'black',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },
  buttonList:{
      alignSelf:'center',
      alignItems: "center",
      backgroundColor: "orange",
      padding: 15,
      color:'white',
      width:400,
      bottom:-280
  },
});
