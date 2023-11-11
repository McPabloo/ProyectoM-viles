import * as React from 'react';
import 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



//Screens

//Crud Screen
import Crud from './Crud';

//Dashboards Screens
import Category from './dashboardCategory';
import Client from './dashboardClient';
import Company from './dashboardCompany';
import OrderDetails from './dashboardOrderDetails';
import Orders from './dashboardOrders';
import Products from './dashboardProducts'
import Shipper from './dashboardShipper';
import Suplier from './dashboardSuplier';
import Users from './dashboardUsers';

//Edit Screens
import CompanyE from './EditCompany';
import UserE from './EditUser';
import ShipperE from './EditShipper';
import CategoryE from './EditCategory';
import ClientE from './EditClient';
import SuplierE from './EditSuplier';
import ProductE from './EditProduct';

//Create Screens
import UserC from './CreateUser';
import CompanyC from './CreateCompany';
import ShipperC from './CreateShippers';
import CategoryC from './CreateCategory';
import ClientC from './CreateClient';
import SuplierC from './CreateSupliers';
import ProductC from './CreateProducts';
import OrderC from './CreateOrderDetails';
import Ordera from './CreateOrders';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainContainer2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Crud" options={{ headerShown: false }} component={Crud} />

            <Stack.Screen name="DashboardCategory" options={{ headerShown: false }} component={Category} />
            <Stack.Screen name="DashboardClient" options={{ headerShown: false }} component={Client} />
            <Stack.Screen name="DashboardCompany" options={{ headerShown: false }} component={Company} />
            <Stack.Screen name="DashboardOrderDetails" options={{ headerShown: false }} component={OrderDetails} />
            <Stack.Screen name="DashboardOrders" options={{ headerShown: false }} component={Orders} />
            <Stack.Screen name="DashboardProducts" options={{ headerShown: false }} component={Products} />
            <Stack.Screen name="DashboardShipper" options={{ headerShown: false }} component={Shipper} />
            <Stack.Screen name="DashboardSuplier" options={{ headerShown: false }} component={Suplier} />
            <Stack.Screen name="DashboardUsers" options={{ headerShown: false }} component={Users} />

            <Stack.Screen name="EditCompany" options={{ headerShown: false }} component={CompanyE} />
            <Stack.Screen name="EditUser" options={{ headerShown: false }} component={UserE} />
            <Stack.Screen name="EditShipper" options={{ headerShown: false }} component={ShipperE} />
            <Stack.Screen name="EditCategory" options={{ headerShown: false }} component={CategoryE} />
            <Stack.Screen name="EditClient" options={{ headerShown: false }} component={ClientE} />
            <Stack.Screen name="EditSuplier" options={{ headerShown: false }} component={SuplierE} />
            <Stack.Screen name="EditProduct" options={{ headerShown: false }} component={ProductE} />

            <Stack.Screen name="CreateUser" options={{ headerShown: false }} component={UserC} />
            <Stack.Screen name="CreateCompany" options={{ headerShown: false }} component={CompanyC} />
            <Stack.Screen name="CreateShipper" options={{ headerShown: false }} component={ShipperC} />
            <Stack.Screen name="CreateCategory" options={{ headerShown: false }} component={CategoryC} />
            <Stack.Screen name="CreateClient" options={{ headerShown: false }} component={ClientC} />
            <Stack.Screen name="CreateSupliers" options={{ headerShown: false }} component={SuplierC} />
            <Stack.Screen name="CreateProduct" options={{ headerShown: false }} component={ProductC} />
            <Stack.Screen name="CreateOrderDetails" options={{ headerShown: false }} component={OrderC} />
            <Stack.Screen name="CreateOrders" options={{ headerShown: false }} component={Ordera} />

        </Stack.Navigator>

    )
}