import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

class Profile extends Component{
    render(){
        return (
            <View style={profileStyles.container}>
                <Text>This is profile screen</Text>
            </View>
        )
    }
}

export default Profile

const profileStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})