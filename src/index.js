import React, { Component } from 'react'
import { View, Text, StyleSheet,StatusBar, TouchableOpacity, TouchableHighlight, Alert } from 'react-native'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './lib/router'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'

const AppIndex = createAppContainer(AppNavigator)



export default class App extends Component{

    render(){
        return(
            <View style={styles.container}>
            <StatusBar
                backgroundColor='white'
                barStyle='dark-content'
            />
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.fbLogo}>facebook</Text>
                    </View>
                    <View style={styles.headerIconContainer}>
                        <TouchableOpacity style={styles.Icon}>
                            <MIcon name='search' size={28} color="#4B4C50"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Icon}>
                            <AwesomeIcon name ='facebook-messenger' size={26} color="#4B4C50"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <AppIndex />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        height:'6%',
        width:'100%',
        paddingLeft:'2%',
        paddingTop:'1%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white'
    },
    fbLogo:{
        textAlign:'left',
        color:'#1878F3',
        fontSize:35,
        fontWeight: 'bold',
        fontFamily: 'Klavin Bold'
    },
    headerIconContainer:{
        height:'80%',
        width:'20%',
        marginRight:'3%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Icon:{
        height:'98%',
        width:'42%',
        backgroundColor: '#F1F2F6',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})