import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

class More extends Component{
    render(){
        return (
            <View style={MoreStyles.container}>
                <Text>This is More screen</Text>
            </View>
        )
    }
}

export default More

const MoreStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})