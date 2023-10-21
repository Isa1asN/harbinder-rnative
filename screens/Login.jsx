import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const style = StyleSheet.create({
    container : {
        alignItems:'center',
        backgroundColor:'white',
        flex:1,
        justifyContent:'flex-start'
    },
    textinput : {
        flex:1,
        fontSize:16,
        paddingHorizontal:5,
    },
    icon :{
        marginTop:100,
    },
    inputcontainer : {
        borderWidth:1,
        width : 270,
        display:'flex',
        flexDirection:'row',
        margin:15,
        padding:6,
        borderRadius:9,
    }
})


const Login = () => {
  return (
    <View style={style.container}>
        <Ionicons style={style.icon} name="person-circle-sharp" size={129} color="#84c8c3" />
        <View>
            <View style={style.inputcontainer}>
                <MaterialIcons name="email" size={29} color="#84c8c3" />
                <TextInput keyboardType='email-address' autoCorrect={false} placeholder='Email' style={style.textinput}/>
            </View>            
            <View style={style.inputcontainer}>
                <FontAwesome5 name="key" size={29} color="#84c8c3" />
                <TextInput type autoCorrect={false} placeholder='Password' style={style.textinput}/>
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