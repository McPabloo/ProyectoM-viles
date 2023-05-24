import React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useState } from 'react';



//Screens

import HomeScreen from './Home';
import Login from './Login';
import Register from './Register';
import dashboardUsers from './dashboardUsers';
import MainContainer2 from './MainContainer2';
import EditUser from './EditUser';
import Profile from './UserProfile';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
;




export default function MainContainer3() {


    return (
 
            <Drawer.Navigator>                    
                        <Drawer.Screen name="HOME" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />                        
                        <Drawer.Screen name="CRUD" options={{ headerShown: false }} component={MainContainer2} />
                        <Drawer.Screen name="USERDATA" options={{ headerShown: false, title: 'PERFIL DE USUARIO' }} component={Profile} />
                        <Drawer.Screen name="LOGOUT" options={{ headerShown: false, title: 'CERRAR SESIÓN' }} component={Login} />
            </Drawer.Navigator>


    )
}