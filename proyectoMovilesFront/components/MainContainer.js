import * as React from 'react';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator useLegacyImplementation initialRouteName={homeName} 
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let rn = route.name;

                            if(rn===homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            } else if(rn===operationName){
                                iconName = focused ? 'list' : 'list-outline'
                            } else if(rn===settingsName){
                                iconName = focused ? 'settings' : 'settings-outline'
                            } 

                        },
                    }) }>
                <Tab.Screen name="HOME SCREEN" options={{headerShown:false, title: 'WELCOME'}} component={HomeScreen} />
                <Tab.Screen name="OPERATIONS" options={{headerShown:false}} component={MainContainer2} />   
                <Tab.Screen name="CONSULTANCIES" options={{headerShown:false}} component={MainContainer3} />    
                <Tab.Screen name="DETAILS" options={{headerShown:false}} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}