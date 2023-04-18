import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecOrderComponent from '../Components/RecOrderComponent';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="RecievedOrders" component={RecOrderComponent} initialParams={{orderStatus : 1 }} />
        <Tab.Screen name="ProccessOrders" component={RecOrderComponent} initialParams={{orderStatus : 2 }} />
        <Tab.Screen name="ClosedOrders" component={RecOrderComponent} initialParams={{orderStatus : 3 }}/>
      </Tab.Navigator>
  );
}