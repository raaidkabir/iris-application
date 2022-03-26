import React, {useLayoutEffect} from 'react'
import { StyleSheet, View, Image, ScrollView} from 'react-native'
import {AntDesign, FontAwesome, Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-elements'
import Widget from '../../components/Widget'

const MainHomeScreen = ({navigation}) => {
    useLayoutEffect(()=>(
    navigation.setOptions({
      headerShown: false
    })
    ),[navigation])
    return (
        <ScrollView style={styles.back} showsVerticalScrollIndicator={false}>
            <View styles={styles.contentWrapper}>
                <Text style={styles.title}>Home</Text>
                <Widget txt='Have meaningful conversations' source = {{uri:'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg'}} />
                <Widget txt='Explore your career ' source = {{uri: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
                <Widget txt='Make real connections' source = {{uri: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2luZyUyMGhhbmRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}}/>

            </View>
        </ScrollView>

    )
}

export default MainHomeScreen

const styles = StyleSheet.create({

    back: {
        flex:1,
        margin: 10
    },

    contentWrapper:{
        backgroundColor: 'red',
        alignItems: 'center'
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ee7b30',
        marginBottom: 30,
        marginTop: 60,

    },

})
