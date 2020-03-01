import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

class HomeView extends Component{
    render() {
        return (
            <ScrollView scrollEnabled={true} contentContainerStyle={homeStyles.container} style={{flex:1}}>
                <View style={homeStyles.writeapost}>
                    <TouchableOpacity style={{flex: 1,height:"100%",width:"100%",alignItems:'center',justifyContent:'center'}}>
                    <Image
                      source={require('../../assets/hello.jpg')}
                      style={{borderRadius:80,height:"73%",width:"80%"}}
                    />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="What's on your mind?"
                        paddingLeft="5%"
                        placeholderTextColor='black'
                        style={homeStyles.writepostinput}
                    />
                </View>
                <View style={homeStyles.more}>
                    <TouchableOpacity>
                        <Text>Live</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>CheckIn</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView scrollEnabled={true} horizontal={true} contentContainerStyle={homeStyles.storyContainer}>
                    <TouchableOpacity style={homeStyles.storyView}>
                        <TouchableOpacity style={homeStyles.iconINstory}>
                            <Text style={{fontSize:30,color:'#1878F3'}}>+</Text>
                        </TouchableOpacity>
                        <Text style={homeStyles.storyName}>Add to story</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.storyView}>
                        <TouchableOpacity style={homeStyles.iconINstory}/>
                        <Text style={homeStyles.storyName}>Imran Khan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={homeStyles.storyView}>
                        <TouchableOpacity style={homeStyles.iconINstory}/>
                        <Text style={homeStyles.storyName}>Junaid Akram</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                
                <View style={homeStyles.postContainer}>
                    <Image
                        
                    />
                </View>
                
            </ScrollView>
        );

    }

}

export default HomeView

const homeStyles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      flex: 1,
      backgroundColor: '#C9CCD1'
    },
    writeapost: {
      height:"8%",
      width:"100%",
      backgroundColor: 'white',
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:'center',
      paddingRight:12,
      paddingLeft:12,
    },
    writepostinput:{
      height:"55%",
      width:"85%",
      borderWidth:1.5,
      borderRadius:60,
      borderColor: 'gainsboro',
      justifyContent:'center',
      alignItems:'center',
    },
    more:{
      height:"5%",
      width:"100%",
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor:"gainsboro",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:"center",
      paddingRight: "10%",
      paddingLeft: "10%",
      marginBottom: '3%'
    },
    storyContainer:{
      height:"72%",
      width:"100%",
      backgroundColor:'white',
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      flexGrow: 1
    },
    storyView:{
      height:"90%",
      width:"28%",
      borderRadius: 15,
      marginLeft: "1%",
      backgroundColor:'black',
      flexDirection:"column",
      justifyContent:"space-between",
    },
    iconINstory:{
      height:"18%",
      width:"35%",
      backgroundColor:'white',
      borderRadius:80,
      borderWidth:3,
      marginTop:"5%",
      marginLeft:"5%",
      justifyContent:"center",
      alignItems:"center",
    },
    mystoryName:{
      color:"white",
      fontSize:12,
      marginBottom:"7%",
      marginLeft:"7%",
    },
    storyName:{
      color:"white",
      fontSize:12,
      marginBottom:"7%",
      marginLeft:"7%",
    },
    postContainer:{
      height:"40%",
      width:"100%",
      backgroundColor:'white',
      marginTop:"3%",
    }
});