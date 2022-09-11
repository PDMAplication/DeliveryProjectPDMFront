//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import {Login} from '../Pages/Login';
import {Solicitar} from '../Pages/Solicitar';
//import {Home} from '../Pages/Home/index';
import Header from '../components/Header';
import { Button } from 'react-native';
import { Cadastro } from '../Pages/Cadastro';
import { Home } from '../Pages/Home';
import { AppStack } from './AppStack';
import {AuthStack} from './AuthStack'
import { AuthContext, useAuth } from '../Context/Auth';


export function StackRoutes() {

    const {authData} = useAuth()
    
    return (

           <NavigationContainer>
            {authData ? <AppStack/>:<AuthStack/>}
           </NavigationContainer>
            
    );
}