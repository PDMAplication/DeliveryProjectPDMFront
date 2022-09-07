import React, { useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { ProductImage } from '../Produto';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { borderWidth } from 'polished';
import {AddOrRemoveItem} from '../Produto'
import { CardStyleInterpolators } from '@react-navigation/stack';
export const Sacola = () =>{

    
    return(
        <View style={styles.container}>
       
          <View style={styles.top}>

          <TouchableOpacity style={{backgroundColor:'#a2a5a9aa', padding:5,margin:3}}>
              <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>

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


           <TouchableOpacity style={styles.buttonAddCart} >
                   <Text style={{color:'white', fontSize:20}}>Continuar</Text>
            </TouchableOpacity>

       </View>
       
    )
}


export const countItens = () =>{
  const [count, setCount] = useState(1)

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
      alignSelf:'center',
      alignItems: "center",
      backgroundColor: "orange",
      padding: 15,
      color:'white',
      width:400
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
  