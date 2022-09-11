import React, { useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import {AddOrRemoveItem} from '../Produto'

export const Sacola = () =>{

    
    return(
        <View style={styles.container}>
       
          <View style={styles.top}>

          {/* <TouchableOpacity style={{backgroundColor:'#a2a5a9aa', padding:5,margin:3}}>
              <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity> */}

             <Text style={{ color: 'black', fontSize:20 }}>Sacola</Text>
          </View>

          <View style={styles.viewItens}>

            <View style={styles.imageView}>
             <Image style={styles.productImage}source={require('../../assets/GoldenBurger.png')}/>
             <View>
                  <Text style={{fontSize:20}}>Golden Burguer</Text>
                  <Text style={{color:'#fb9400', fontSize:30}}>$ 25,50</Text>
             </View>   
            <AddOrRemoveItem/>
              
            </View>

            <View style={styles.imageView}>
             <Image style={styles.productImage}source={require('../../assets/GoldenBurger.png')}/>

             <View>
                  <Text style={{fontSize:20}}>Golden Burguer</Text>
                  <Text style={{color:'#fb9400', fontSize:30}}>$ 25,50</Text>
             </View>  
            <AddOrRemoveItem/>
              
            </View>


            <View style={{flexDirection:'row',justifyContent:'space-between',padding:5,alignItems:'center'}}>
              <Text style={{fontSize:20}}>Total</Text>
              <Text style={{color:'#fb9400', fontSize:30}}>$ 100,50</Text>
            </View> 
             
             
           </View>


           <TouchableOpacity style={styles.buttonContinue} >
                   <Text style={{color:'white', fontSize:20}}>Continuar</Text>
            </TouchableOpacity>

       </View>
       
    )
}


const styles = StyleSheet.create({
    container:{
      padding:5,
    },
    top:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:15,
      padding:2,
      borderBottomColor:"grey",
      borderBottomWidth:2,
    },
    productImage: {
      width: 100,
      height: 100,
    },
    viewItens:{
     display:'flex',
    },
    imageView:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    buttonContinue: {
      alignSelf:'center',
      alignItems: "center",
      backgroundColor: "orange",
      padding: 15,
      color:'white',
      width:400
    },
  });
  