import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

class Pages extends Component{
    render(){
        return (
            <View style={PagesStyles.container}>
                <Text>This is Pages screen</Text>
            </View>
        )
    }
}

export default Pages

const PagesStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})