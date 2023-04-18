import { FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import cart from '../Data/cart.json';
import ItemCard from './ItemCard';

export default function CartComponent() {

  const [list, SetList] = useState([]);

  const GetList = () => {
    try {
      SetList(cart);
      console.log(cart);
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
        <Text>No items in cart</Text>
      ) : (
        <FlatList
          data = {list}
          renderItem = {({item}) => <ItemCard {...item}/>}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  )
}