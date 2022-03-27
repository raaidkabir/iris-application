import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainHomeScreen from '../screens/homestack/MainHomeScreen'
import MatchedMentor from '../screens/homestack/MatchedMentor'
import ResumeReview from '../screens/homestack/ResumeReview'

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={MainHomeScreen}/>
            <Stack.Screen name='MatchedMentor' component={MatchedMentor}/>
            <Stack.Screen name='ResumeReview' component={ResumeReview}/>
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
