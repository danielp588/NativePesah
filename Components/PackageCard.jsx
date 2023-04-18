import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import packages from '../Data/packages.json';

export default function PackageCard({id,date,address,phone,name,amount,status}) {

    
    const UpdateStatus = () => {
        //update json file here
        alert("TODO Update json file");
    }

  return (
    <View style={styles.border}>
      <View style={{maxWidth: '80%'}}>
        <Text>Order number: {id}</Text>
        <Text>{date}</Text>
        <Text>Address: {address}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Name: {name}</Text>
        <Text>Amount: {amount}</Text>
        <Text>Status: {status}</Text>
      </View>
      <TouchableOpacity 
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={UpdateStatus}
      >
        <Text>Update status</Text>
      </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
    border: {
      flex: 1,
      flexDirection: 'row',
      maxWidth:'100%',
      padding: 15,
      borderWidth: '1',
      borderRadius:'30',
      borderColor:'green',
      marginTop: 5,
      backgroundColor:'pink'
    }
  });
  