import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
    },
    btn :{
        backgroundColor:'#84c8c3',
        padding:10,
        width:124,
        alignItems:'center',
        borderRadius:9,
        margin:10
    },
    btnRegister : {
        backgroundColor:'#ffffff',
        padding:10,
        width:124,
        alignItems:'center',
        borderRadius:9,
        margin:15,
        borderWidth:2,
        borderColor:'#84c8c3'
    }
})


const Login = () => {
    const navigate = useNavigation();

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
        <TouchableOpacity style={style.btn}>
            <Text style={{fontSize:20}}>
                Sign in
            </Text>
        </TouchableOpacity>
            <View>
                <Text>
                    No account ? 
                </Text>
            </View>
        <TouchableOpacity style={style.btnRegister} onPress={()=>navigate.replace('register')}>
            <Text style={{fontSize:20}}>
                Register
            </Text>
        </TouchableOpacity>

    </View>
  )
}

export default Login