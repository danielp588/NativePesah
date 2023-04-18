import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Login({navigation}) {

  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const LoginAttempt = ()=>{
    if(username == 'client' && password == '1234'){
      //navigate to client page
      SetUsername('');
      SetPassword('');
      navigation.navigate('Client');
    }
    else if(username == 'admin' && password == '5678'){
      //navigate to admin page
      SetUsername('');
      SetPassword('');
      navigation.navigate('Admin');
    }
    else{
      alert("Wrong credentials.");
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        Login
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={SetUsername}
        placeholder="username"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={SetPassword}
        placeholder="password"
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={LoginAttempt}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});