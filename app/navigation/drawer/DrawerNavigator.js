// src/navigation/MainNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AddMenuItem, Dashboard, Menu, OrderLists, Profile, Requests, RiderList, UserList } from '../../screens/DrawerScreens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="AddMenuItem" component={AddMenuItem} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="OrderLists" component={OrderLists} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Requests" component={Requests} />
            <Drawer.Screen name="RiderList" component={RiderList} />
            <Drawer.Screen name="UserList" component={UserList} />
        </Drawer.Navigator>
    );
};