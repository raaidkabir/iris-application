import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainHomeScreen from '../screens/homestack/MainHomeScreen'

const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={MainHomeScreen}/>
            
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
