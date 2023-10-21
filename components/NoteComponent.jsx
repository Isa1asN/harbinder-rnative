import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const style = StyleSheet.create({
    text : {

    },
    container : {
        alignSelf:'center',
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10,
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 5,
        backgroundColor : 'white',
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.25,
        shadowRadius : 4,
        elevation : 5,
        alignContent:'center',
        alignItems:'center',
    }
})

const NoteComponent = ({title, dateCreated}) => {
  return (
    <View style={style.container}>
        <View>
            {/* <MaterialIcons name="sticky-note-2" size={24} color="black" /> */}
            <Text>{title}</Text>
            <Text>{dateCreated}</Text>
        </View>
        <View>
        <AntDesign name="delete" size={24} color="red" />
        </View>
    </View>
  )
}

export default NoteComponent