import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

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

const list = [
  {name : 'Esu'},
  {name : 'John'},
  {name : 'Doe'},
  {name : 'Bow'},
  {name : 'Ben'},
  {name : 'Ban'},
  {name : 'Bin'},
  {name : 'Bun'},
]

const Home = () => {

  const navigation = useNavigation()

  return (
    <View>
      <StatusBar animated={true} backgroundColor='black'/>
      <View style={style.text}>
        <Text>Home page</Text>
      </View>
      <View>
        <FlatList
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            key={(item)=>item.name}
            data={list}
            renderItem={({item})=>
            <Text style={{alignSelf:'center', marginLeft:70, fontSize:30, marginTop:50}}>{item.name}</Text>
          }
        />

      </View>
      <View>
        <Button  title='Note' onPress={() => navigation.navigate('note')}/>
      </View>
    </View>
  )
}

export default Home