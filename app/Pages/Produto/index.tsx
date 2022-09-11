import React, { useState } from 'react';
import { TouchableOpacity, View,StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

 export const Produto = () => {

   const navigation=useNavigation()
   
    return (
      <View style={styles.container}>

        <View style={styles.top}>

         <View style={styles.menuProduct}>

          <TouchableOpacity  onPress={()=>navigation.navigate('Home'as never, {} as never)} style={{backgroundColor:'#a2a5a9aa', padding:5}}>
              <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>

            <Text style={{ color: 'white', fontSize:20}}>Produto</Text>

            <TouchableOpacity style={{backgroundColor:'#a2a5a9aa', padding:5}}>
              <MaterialIcons name="favorite-border" size={24} color="white"/>
            </TouchableOpacity>
         </View>
           
         <ProductImage/>
    
        </View>

        <View style={styles.detailsSection}>
      
          <Text>Tradicional</Text>
          <Text style={{fontSize:50}}>Golden Burguer</Text>
          <Text style={{color:'#a2a5a9'}}>2 Blends de carne de 150g, Queijo Cheddar,
Bacon Caramelizado, Salada, Molho da casa,
Pão brioche artesanal, </Text>
           
           <View style={{marginTop:10}}>
              <Text>Quantidade</Text>

               <View style={styles.priceInformation}>

                 <AddOrRemoveItem/>
                 
                 <Text style={{color:'#fb9400', fontSize:40}}>$ 25,50</Text>
               </View>
               
               <TouchableOpacity style={styles.buttonAddCart} >
                   <Text style={{color:'white', fontSize:20}}>Adicionar à sacola</Text>
               </TouchableOpacity>
           </View>
         
        </View>
      </View>
    );
}

export const ProductImage = ()=>(
  <View style={styles.imageView}>
      <Image style={styles.productImage}source={require('../../assets/GoldenBurger.png')}/>
  </View>
)

export const AddOrRemoveItem = ()=>{

  const [count, setCount] = useState(1)

  const handleAdd = () => {
    setCount(val => val+1)   
  }

  const handleRemove = () => {
    setCount(val => val-1)   
  }

  return(
  <View style={{flexDirection:'row',alignItems:'center'}}>

 <TouchableOpacity style={styles.buttonRemoveItem} onPress={handleRemove}>
    <Ionicons name="ios-remove" size={24} color="white" />
  </TouchableOpacity>

  <Text style={{width:35, textAlign:'center'}} >
    {count}
  </Text>

  <TouchableOpacity style={styles.buttonAddItem} onPress={handleAdd} >
    <Ionicons name="add-sharp" size={24} color="white" />
  </TouchableOpacity>

 
</View>
 )
  
}

const styles = StyleSheet.create({
  container: {
   width:'100%',
   height:'100%',
   marginTop:0
  },
  top:{
    position:'relative',
    padding:25,
    justifyContent:'space-between',
    flex:2,
    flexDirection:'column',
    backgroundColor: "#fb9400",
  },
  detailsSection:{
    marginTop:70,
    zIndex:-1,
    padding:20,
    flex:3,
    backgroundColor: "white",
  },
  productImage: {
    alignSelf:'center',
    width: 300,
    height: 300,
  },
  menuProduct:{
    marginTop:10,
    alignItems:'center',
    padding:5,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  imageView:{
    marginTop:30,
    justifyContent:'center'
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

