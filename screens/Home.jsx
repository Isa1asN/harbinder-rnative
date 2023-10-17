import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const style = StyleSheet.create({
  text : {
    marginTop : 100,
    color : 'red',
    backgroundColor:'cyan',
    width:'50%',
    alignSelf:'center',
    height: 100,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:40,
    borderBottomEndRadius:40,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    shadowColor:'#000',
    shadowOpacity:1,
    shadowOffset : {
      width : 20,
      height : 50
    },
    shadowRadius: 3,
    elevation:30

  }
})

const Home = () => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor='black'/>
      <View style={style.text}>
        <Text>Home page</Text>
      </View>
    </View>
  )
}

export default Home