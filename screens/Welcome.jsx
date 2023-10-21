import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'

const style = StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4d3d2',
    },
    logoC: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#c4d3d2'
    },
    logoName: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#3a5d74',
    },
    intro :{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#c4d3d2',
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
    }});

const Welcome = () => {
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
        </View>
    </View>
  )
}

export default Welcome