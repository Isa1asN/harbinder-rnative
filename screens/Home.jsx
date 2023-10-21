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
    <View style={{backgroundColor:'rgb(245, 238, 238)', height:'100%'}}>
      <View style={{backgroundColor:'rgba(0, 0, 0, .15)', width:'100%', height:'100%', position:'absolute', justifyContent : 'flex-start'}}>
      <Text style={{
        alignSelf : 'center',
        fontFamily : 'monospace',
        fontSize : 26,
        fontWeight : 'bold',
        top : 60,
        borderBottomWidth : 1,
        }} >
        My Notes
        </Text>
      </View>
      <Image 
        source={note}
        style={{width:'100',height: '100%', opacity:0.3, zIndex:-4}}
      />
      <View>
      </View>
    </View>
    </>
  )
}

export default Home