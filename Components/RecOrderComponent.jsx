import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import packages from '../Data/packages.json';
import PackageCard from './PackageCard';

export default function RecOrderComponent({route}) {

  const [list, SetList] = useState([]);
  
  const {orderStatus} = route.params;
  
    
  const GetList = () => {
    try {
      const filteredList = packages.filter(p => p.status == orderStatus);
      SetList(filteredList);
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
          renderItem = {({item}) => <PackageCard {...item}/>}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  )
}