import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const style = StyleSheet.create({
    container : {
        alignItems:'center',
        backgroundColor:'white',
        flex:1,
        justifyContent:'flex-start'
    },
    textinput : {
        borderWidth:1
    },
    icon :{
        marginTop:100,
        
    }
})


const Login = () => {
  return (
    <View style={style.container}>
        <Ionicons style={style.icon} name="person-circle-sharp" size={129} color="#84c8c3" />
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
            <View>
                <Text>
                    No account ? 
                </Text>
            </View>
        <TouchableOpacity>
            <Text>
                Register
            </Text>
        </TouchableOpacity>

    </View>
  )
}

export default Login