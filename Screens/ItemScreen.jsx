import { View, Text } from 'react-native';
import React from 'react';
import items from '../Data/Items.json';

export default function ItemScreen({route}) {

    const {id} = route.params;//pressed item id

    //finding item
    const item = items.find((item) => item.id == id);

    //rendering item
  return (
    <View>
      <Text>item number: {item.id} name: {item.name} </Text>
    </View>
  )
}