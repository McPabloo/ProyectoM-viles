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
<<<<<<< HEAD
import Crud from './Crud';
import AsyncStorage from '@react-native-async-storage/async-storage';
=======

/*
import HomeScreen from './HomeScreen';
import OperationScreen from './OperationScreen';
import SettingsScreen from './SettingsScreen';
import Caja from './CalcuProte';
import MainContainer2 from './MainContainer2';
import MainContainer3 from './/MainContainer3';
>>>>>>> f27b9fc967a07a09c9dee5061ca9700f63ddea08

//Screen Names

const homeName = 'Home';
const operationName = 'Operation';
const settingsName = 'Settings';
*/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
;


const getIsSignedIn =  async () => {

return true;
    

};


export default function MainContainer() {

    const isSignedIn =  getIsSignedIn();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
<<<<<<< HEAD
                {isSignedIn ? (
                    <>
                        <Drawer.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                        <Drawer.Screen name="Crud" options={{ headerShown: false }} component={Crud} />
                        <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                        <Drawer.Screen name="Register" options={{ headerShown: false }} component={Register} />
                    </>
                ) : (
                    <>

                        <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                        <Drawer.Screen name="Register" options={{ headerShown: false }} component={Register} />
                    </>
                )}
=======
                <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Drawer.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Drawer.Screen name="Crud" options={{ headerShown: false }} component={Crud}/>
                <Drawer.Screen name="Register" options={{ headerShown: false }} component={Register}/>
>>>>>>> f27b9fc967a07a09c9dee5061ca9700f63ddea08
            </Drawer.Navigator>

        </NavigationContainer>
    )
}