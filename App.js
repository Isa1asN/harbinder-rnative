import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Note from './screens/Note';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='home' >
        <Stack.Screen
         name='home' 
         component={Home} 
         options={{
          title : 'Home page',
          headerStyle :{
            backgroundColor : 'orange',
            borderBottomEndRadius : 30
            // borderTopRightRadius:110
          },
          headerTitleStyle : {
            color : 'red',
          },
          headerTitleAlign : 'center'
          }} />
        <Stack.Screen name='note' component={Note}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 