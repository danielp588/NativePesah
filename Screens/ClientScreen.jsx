import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StoreComponent from '../Components/StoreComponent';
import CartComponent from '../Components/CartComponent';
import ProfileComponent from '../Components/ProfileComponent';

const Tab = createBottomTabNavigator();

export default function ClientScreen({navigation}) {
  return (
        <Tab.Navigator>
          <Tab.Screen name="Store" component={StoreComponent}/>
          <Tab.Screen name="Cart" component={CartComponent}/>
          <Tab.Screen name="Profile" component={ProfileComponent}/>
        </Tab.Navigator>
  );
}