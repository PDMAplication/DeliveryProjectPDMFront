import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import {Login} from '../Pages/Login';
import {Solicitar} from '../Pages/Solicitar';
//import {Home} from '../Pages/Home/index';
import Header from '../components/Header';

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
                        header: () => <Header title='' showX={false}/>
                    }}/>
                <Screen
                    name="Home"
                    component={Login}
                    options={{
                        headerShown: true,
                        header: () => <Header title='Home' showX={false}/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}