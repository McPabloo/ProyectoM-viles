import * as React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



//Screens

import HomeScreen from './Home';
import Login from './Login';
import Register from './Register';
import Crud from './Crud';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Drawer.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Drawer.Screen name="Crud" options={{ headerShown: false }} component={Crud}/>
                <Drawer.Screen name="Register" options={{ headerShown: false }} component={Register}/>
            </Drawer.Navigator>

        </NavigationContainer>
    )
}