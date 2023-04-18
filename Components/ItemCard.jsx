import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ItemCard({id,name}) {

    const navigation = useNavigation();

    const ShowItem = () => {
        //navigate to ItemScreen with pressed item's id
        navigation.navigate('Item', {id});
    }

  return (
    <TouchableOpacity style={styles.border} onPress={ShowItem}>
      <View style={{maxWidth: '80%'}}>
        <Text>{id}</Text>
        <Text>{name}</Text>
      </View>
      </TouchableOpacity>
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
  