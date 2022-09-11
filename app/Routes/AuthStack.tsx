import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Cadastro } from "../Pages/Cadastro";
import { Solicitar } from "../Pages/Solicitar";

const Stack = createNativeStackNavigator()

export function AuthStack(){


  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Solicitar" component={Solicitar}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
 )
   
}