import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='home'
        options={{headerTitle : "Home page"}}
        component={Home}
      />
    </Stack.Navigator>
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
