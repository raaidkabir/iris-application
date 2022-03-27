import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MainProfileScreen from '../screens/profilestack/MainProfileScreen'
import Interests from '../screens/profilestack/Interests'
const ProfileStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Profile' component={MainProfileScreen}/>
            <Stack.Screen name='Interests' component={Interests}/>
        </Stack.Navigator>
    )
}

export default ProfileStack

const styles = StyleSheet.create({})
