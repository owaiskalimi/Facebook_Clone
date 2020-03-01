import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Pages from '../screens/Pages'
import Notification from '../screens/Notification'
import More from '../screens/More'
import FriendsRequest from '../screens/FriendsRequest'
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const AppNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <CommunityIcon name='home' size={24} color="#1878F3" adjustsFontSizeToFit={true}/>
                    : <CommunityIcon name='home-outline' size={24} color="#949497" adjustsFontSizeToFit={true}/>
                )
            }
        },
        FriendsRequest: {
            screen: FriendsRequest,
            navigationOptions:{
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <MaterialIcon name='people' size={24} color="#1878F3" />
                    : <MaterialIcon name='people-outline' size={24} color="#949497" />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <AwesomeIcon name='user-circle' size={24} color="#1878F3" />
                    : <AwesomeIcon name='user-circle-o' size={24} color="#949497"/>
                )
            }
        },
        Pages: {
            screen: Pages,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <CommunityIcon name='flag' size={24} color="#1878F3" />
                    : <CommunityIcon name='flag-outline' size={24} color="#949497"/>
                )
            }
        },
        Notification: {
            screen: Notification,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <AwesomeIcon name='bell' size={24} color='#1878F3'/>
                    : <AwesomeIcon name='bell-o' size={24} color='#949497'/>
                )
            }
        },
        More: {
            screen: More,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <SimpleIcon name='menu' size={24} color='#1878F3' />
                    : <SimpleIcon name='menu' size={24} color='#949497' />
                )
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor: '#1878F3',
            inactiveTintColor: 'black',
            activeBackgroundColor: 'white',
            showLabel: false,
            showIcon: true,
            style:{
                backgroundColor: 'white',
                height: '6%'
            },
            indicatorStyle: {
                backgroundColor: '#1878F3',
                marginLeft:'1%',
                width: '13.5%',
            },
            iconStyle: {
                height: '100%',
                width: '100%',
                justifyContent: 'center'
            }
        }
    }
)

export default AppNavigator