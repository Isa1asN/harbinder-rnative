import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import note from '../assets/note.png'

const style = StyleSheet.create({
  text : {
    
    },
    

  }
)

const Home = () => {

  const navigation = useNavigation()

  return (
    <>
    <StatusBar animated={true}  backgroundColor='black'/>
    <View >
      <Image 
        source={note}
        style={{width:'100',  }}
      />
    </View>
    </>
  )
}

export default Home