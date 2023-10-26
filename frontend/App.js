import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name='welcome' component={Welcome} options={{headerShown : false,}} />

        <Stack.Screen name='login' component={Login} options={{title:'Login', headerTitleAlign:'center', headerStyle:{borderBottomWidth:1, borderColor:'#84c8c3'}}} />

        <Stack.Screen name='register' component={Register} options={{title:'Register', headerTitleAlign:'center', headerStyle:{borderBottomWidth:1, borderColor:'#84c8c3'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

