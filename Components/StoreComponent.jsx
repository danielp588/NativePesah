import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import items from '../Data/Items.json';
import ItemCard from './ItemCard';

export default function StoreComponent({navigation}) {

  const [list, SetList] = useState([]);

  const GetList = () => {
    try {
      SetList(items);
      console.log(items);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    GetList();
  },[]);

  return (
    <FlatList
      data = {list}
      renderItem = {({item}) => <ItemCard {...item}/>}
      keyExtractor={(item) => item.id}
    />
  )
}