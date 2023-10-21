import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent : 'space-between'
    },
    textinput : {
        borderWidth:1
    }
})


const Login = () => {
  return (
    <View style={style.container}>
        <Ionicons name="person-circle-sharp" size={104} color="black" />
        <View>
            <View>
                <TextInput style={style.textinput}/>
            </View>            
            <View>
                <TextInput style={style.textinput}/>
            </View>
        </View>
        <TouchableOpacity>
            <Text>
                Sign in
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>
                Register
            </Text>
        </TouchableOpacity>

    </View>
  )
}

export default Login