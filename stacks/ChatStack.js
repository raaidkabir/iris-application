import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainChatScreen from '../screens/chatstack/MainChatScreen'
import AddChatScreen from '../screens/chatstack/AddChatScreen'
import ChatScreen from '../screens/chatstack/ChatScreen'

const Stack = createStackNavigator()
const ChatStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={MainChatScreen}/>
            <Stack.Screen name='AddChat' component={AddChatScreen}/>
            <Stack.Screen name='Chat' component={ChatScreen}/>
        </Stack.Navigator>
    )
}

export default ChatStack

const styles = StyleSheet.create({})
