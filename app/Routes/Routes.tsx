import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import {Login} from '../Pages/Login';
import Header from '../components/Header';
import { Solicitar } from '../Pages/Solicitar';

const {Navigator, Screen} = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator 
            screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>
                <Screen 
                    name="Login" 
                    component={Login}/>
                <Screen 
                    name="Solicitar" 
                    component={Solicitar}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Solicitar' showX={false}/>
                    }}/>
            </Navigator>
        </NavigationContainer>
    );
}