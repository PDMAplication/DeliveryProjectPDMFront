import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../Pages/Home/index";
import { Perfil } from "../Pages/Perfil";
import { Login } from "../Pages/Login";
import { Sacola } from "../Pages/Sacola";
import Pedidos from "../Pages/Pedidos"
import { Produto } from "../Pages/Produto";
import Map from '../Pages/Map'

const Stack = createNativeStackNavigator()

export function AppStack(){


  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen options={{headerShown:false}} name="Produtos" component={Produto}/>
      <Stack.Screen name="Perfil" component={Perfil}/>
      <Stack.Screen name="Sacola" component={Sacola}/>
      <Stack.Screen name="Pedidos" component={Pedidos}/>
      <Stack.Screen name="Map" component={Map}/>
    </Stack.Navigator>
 )
   
}