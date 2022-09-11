import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../service/authService";
import React from "react";
import { Alert } from "react-native";
//import AsyncStorage from  "@react-native-community/async-storage"
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface AuthData{
    token:string,
    email:string,
    name:string
}
interface AuthContextData{
  authData?:AuthData
  signIn:(email:string,password:string) => Promise<AuthData>
  signOut:() => Promise<void>
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
)

export const AuthProvider: React.FC = ({children})=>{

    const[authData, setAuth] = useState<AuthData>()

    useEffect(()=>{
     loadFromStorage()
    },[])

    

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth){
            setAuth(JSON.parse(auth) as AuthData)
        }
    }

    async function signIn(email:string,password:string):Promise<AuthData>{
    //chamar api

    try {
        const auth = await authService.signIn(email,password)
        setAuth(auth)

        AsyncStorage.setItem('@AuthData',JSON.stringify(auth))
        return auth
    } catch (error) {
        Alert.alert(error.message,'Não foi possível logar')
    }

    
    }
    function signOut():Promise<void>{
     //fazer logout
     setAuth(undefined)
     AsyncStorage.removeItem('@AuthData')
     return
    }

    return <AuthContext.Provider value={{authData,signIn,signOut}}>{children}</AuthContext.Provider>
    
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}