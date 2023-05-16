import * as React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



//Screens


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LOGIN" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="HOME SCREEN" options={{ headerShown: false, title: 'WELCOME' }} component={HomeScreen} />
                <Stack.Screen name="Crud" options={{ headerShown: false }} component={Crud}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}