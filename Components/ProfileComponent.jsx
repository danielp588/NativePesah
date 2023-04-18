import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import orders from '../Data/orders.json';
import OrderCard from './OrderCard';

export default function ProfileComponent() {

  const [list, SetList] = useState([]);

  const GetList = () => {
    try {
      SetList(orders);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    GetList();
  },[]);

  return (
    <>
      {list.length == 0 ? (
        <Text>No orders yet</Text>
      ) : (
        <>
        <Text>TODO Date sort</Text>
        <FlatList
          data = {list}
          renderItem = {({item}) => <OrderCard {...item}/>}
          keyExtractor={(item) => item.id}
        />
        </>
      )}
    </>
  )
}