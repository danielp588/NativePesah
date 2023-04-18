import { View, Text } from 'react-native';
import React from 'react';
import orders from '../Data/orders.json';

export default function ItemScreen({route}) {

    const {id} = route.params;//pressed order id

    //finding order
    const order = orders.find((order) => order.id == id);

    //rendering order
  return (
    <View>
      <Text>Order number: {order.id}</Text>
      <Text>Date: {order.date}</Text>
      <Text>Adress: {order.address}</Text>
      <Text>Phone: {order.phone}</Text>
      <Text>Full name: {order.name}</Text>
      <Text>Amount: {order.amount}</Text>
    </View>
  )
}