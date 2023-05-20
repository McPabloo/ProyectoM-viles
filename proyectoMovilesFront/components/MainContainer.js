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
import dashboardOrders from './dashboardOrders';
import MainContainer2 from './MainContainer2';
import EditUser from './EditUser';
import MainContainer3 from './MainContainer3';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
;




export default function MainContainer() {


    return (
        <NavigationContainer>
            <Stack.Navigator>

                        <Stack.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                        <Stack.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={MainContainer3} />      
                        <Stack.Screen name="REGISTER" options={{ headerShown: false }} component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}