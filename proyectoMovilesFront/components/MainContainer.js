import * as React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



//Screens

import HomeScreen from './Home';
import Login from './Login';
<<<<<<< HEAD
import Crud from './Crud';
=======
import Register from './Register';
>>>>>>> a8fd088b3c109db846c89380b9f89d6a4c69fec7



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
<<<<<<< HEAD
            <Drawer.Navigator>
                <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Drawer.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Drawer.Screen name="Crud" options={{ headerShown: false }} component={Crud}/>
            </Drawer.Navigator>

=======
            <Stack.Navigator>
                <Stack.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Stack.Screen name="Register" options={{ headerShown: false, title: 'Register' }} component={Register} />
            </Stack.Navigator>
>>>>>>> a8fd088b3c109db846c89380b9f89d6a4c69fec7
        </NavigationContainer>
    )
}