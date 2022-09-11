import {AuthData} from '../Context/Auth'

async function signIn(email:string,password:string):Promise<AuthData>{

    return new Promise((resolve, reject)=>{

        if(password==='12345'){
            resolve({
                token:'fake-token',
                email,
                name:'Usuario'
            })
        }else{
            reject(new Error('Credenciais inválidas'))
        }

    })
}

export const authService = {signIn}
