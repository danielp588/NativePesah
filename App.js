import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import ClientScreen from './Screens/ClientScreen';
import AdminScreen from './Screens/AdminScreen';
import ItemScreen from './Screens/ItemScreen';
import OrderScreen from './Screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Client" component={ClientScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
