import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

class FriendRequest extends Component{
    render(){
        return (
            <View style={FriendRequestStyles.container}>
                <Text>This is FriendRequest screen</Text>
            </View>
        )
    }
}

export default FriendRequest

const FriendRequestStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})