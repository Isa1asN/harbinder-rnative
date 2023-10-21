import { View, Text, Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#84c8c3',
    },
    logoC: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#84c8c3'
    },
    logoName: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#3a5d74',
    },
    intro :{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#84c8c3',
        padding: 20,
        marginTop: 30,
        marginBottom: 30,
    },
    introText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#4b606e',
        textAlign: 'center',
        marginBottom: 10,
    },
    touchbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0090f0',
        padding: 10,
        borderRadius: 7,
        width: 250,
        paddingVertical:13,
        marginTop: 200,
    },
    btntxt :{
        fontSize: 18,
        fontWeight: '400',
        color: '#fff',
    }
});

const Welcome = () => {
    
    const navigate = useNavigation();

  return (
    <View style={style.container}>
        <View style={style.logoC}>
            <Image source={logo} style={{width:120, height:120}}/>
            <View>
                <Text style={style.logoName}>
                    Harbinder
                </Text>
            </View>
        </View>
        <View style={style.intro}>
            <Text style={style.introText}>Step into Harbinder, where conversations unfold with ease and every word finds its place.</Text>
            <TouchableOpacity style={style.touchbtn}>
                <Text style={style.btntxt} onPress={()=>  navigate.replace('login')}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Welcome