import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './Routes';


export function Routes(){
    return(
        <NavigationContainer>
           <StackRoutes/>
        </NavigationContainer>
    )
}