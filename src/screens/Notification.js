import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

class Notification extends Component{
    render(){
        return (
            <View style={NotificationStyles.container}>
                <Text>This is Notification screen</Text>
            </View>
        )
    }
}

export default Notification

const NotificationStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})