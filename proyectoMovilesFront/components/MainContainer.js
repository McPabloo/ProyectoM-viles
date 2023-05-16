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

/*
import HomeScreen from './HomeScreen';
import OperationScreen from './OperationScreen';
import SettingsScreen from './SettingsScreen';
import Caja from './CalcuProte';
import MainContainer2 from './MainContainer2';
import MainContainer3 from './MainContainer3';

//Screen Names

const homeName = 'Home';
const operationName = 'Operation';
const settingsName = 'Settings';
*/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Stack.Screen name="Register" options={{ headerShown: false, title: 'Register' }} component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}