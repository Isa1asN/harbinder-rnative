import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const style = StyleSheet.create({
  text : {
    
    },
    

  }
)

const Home = () => {

  const navigation = useNavigation()

  return (
    <View>
      <StatusBar animated={true}  backgroundColor='black'/>
      
    
    </View>
  )
}

export default Home