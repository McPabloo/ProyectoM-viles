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
import CreateUser from './CreateUser';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
;


const getIsSignedIn = () => {

    return true;


};


export default function MainContainer() {

    const isSignedIn = getIsSignedIn();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                {isSignedIn ? (
                    <>
                        <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                        <Drawer.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                        <Drawer.Screen name="CRUD" options={{ headerShown: false }} component={MainContainer2} />
                        <Drawer.Screen name="REGISTER" options={{ headerShown: false }} component={Register} />

                        <Drawer.Screen name="dashboardUsers" options={{ headerShown: false }} component={dashboardUsers} />
                        <Drawer.Screen name="dashboardOrders" options={{ headerShown: false }} component={dashboardOrders} />
                        <Drawer.Screen name="EditUser" options={{ headerShown: false }} component={EditUser} />
                        <Drawer.Screen name="CreateUser" options={{ headerShown: false }} component={CreateUser} />
                    </>
                ) : (
                    <>

                        <Drawer.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                        <Drawer.Screen name="Register" options={{ headerShown: false }} component={Register} />
                    </>
                )}
            </Drawer.Navigator>

        </NavigationContainer>
    )
}