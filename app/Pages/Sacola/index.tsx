import React, { useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { ProductImage } from '../Produto';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { borderWidth } from 'polished';
import {AddOrRemoveItem} from '../Produto'
export const Sacola = () =>{

    
    return(
        <View>

          <View style={styles.top}>
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
             
             
           </View>

       </View>
       
    )
}

const styles = StyleSheet.create({
    top:{
      marginTop:15,
      padding:25,
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
    menuProduct:{
      marginTop:10,
      alignItems:'center',
      padding:5,
      justifyContent:'space-between',
      flexDirection:'row'
    },
    imageView:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    buttonAddCart: {
      alignItems: "center",
      backgroundColor: "orange",
      padding: 15,
      color:'white'
    },
    buttonAddItem:{
      backgroundColor:'orange',
      padding:5
    },
    buttonRemoveItem:{
      backgroundColor:'#a2a5a9aa', 
      padding:5
    },
    priceInformation:{
      flexDirection:'row', alignItems:'center',
      marginBottom:85, 
      justifyContent:'space-between'
    }
  });
  