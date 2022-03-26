import React, {useLayoutEffect} from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import {AntDesign, FontAwesome, Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-elements'

const MainHomeScreen = ({navigation}) => {
    useLayoutEffect(()=>(
    navigation.setOptions({
      headerShown: false
    })
    ),[navigation])
    return (
        <SafeAreaView>
            <TouchableOpacity activeOpacity={0.5} >
                <Ionicons name ='add-circle' filled color={'#ee7b30'} size={90}/>
                <Text style={{fontWeight:'bold'}}>Meet with Professionals like you</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default MainHomeScreen

const styles = StyleSheet.create({})
