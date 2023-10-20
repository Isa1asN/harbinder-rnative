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
      <View style={{backgroundColor:'rgba(0, 0, 0, .4)', width:'100%', height:'100%', position:'absolute'}}>
      </View>
      <Image 
        source={note}
        style={{width:'100', opacity:0.4, zIndex:1}}
      />
        <Text >
        Welcome to Memopad!
        </Text>
      <View>
      </View>
    </View>
    </>
  )
}

export default Home