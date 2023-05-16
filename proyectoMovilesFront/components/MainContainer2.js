import * as React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



//Screens
import Crud from './Crud';
import Category from './dashboardCategory';
import Client from './dashboardClient';
import Company from './dashboardCompany';
import OrderDetails from './dashboardOrderDetails';
import Orders from './dashboardOrders';
import Products from './dashboardProducts'
import Shipper from './dashboardShipper';
import Suplier from './dashboardSuplier';
import Users from './dashboardUsers';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Crud" options={{ headerShown: false }} component={Crud} />
            <Stack.Screen name="Category" options={{ headerShown: false }} component={Category} />
            <Stack.Screen name="Client" options={{ headerShown: false }} component={Client} />
            <Stack.Screen name="Company" options={{ headerShown: false }} component={Company} />
            <Stack.Screen name="OrderDetails" options={{ headerShown: false }} component={OrderDetails} />
            <Stack.Screen name="Orders" options={{ headerShown: false }} component={Orders} />
            <Stack.Screen name="Products" options={{ headerShown: false }} component={Products} />
            <Stack.Screen name="Shipper" options={{ headerShown: false }} component={Shipper} />
            <Stack.Screen name="Suplier" options={{ headerShown: false }} component={Suplier} />
            <Stack.Screen name="Users" options={{ headerShown: false }} component={Users} />
        </Stack.Navigator>

    )
}