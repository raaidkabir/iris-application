import React, {useLayoutEffect} from 'react'
import { StyleSheet, View, Image, ScrollView} from 'react-native'
import {AntDesign, FontAwesome, Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native-elements'
import Widget from '../../components/Widget'
import User from '../../components/User'

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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <User source={{uri: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1618404166229-c7b4b3f8aa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1534493872551-856c2bb2279f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80'}}/>
                    <User source={{uri: 'https://images.unsplash.com/photo-1627393100177-b4297e79a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}}/>
                </ScrollView>
                <ScrollView horizontal>
                    <Widget txt='Have meaningful conversations' source = {{uri:'https://media.istockphoto.com/photos/group-analysis-of-digital-data-picture-id954307646?k=20&m=954307646&s=612x612&w=0&h=TM-27FHNSJ7gz8SZDYq6hFv86KbTc98am5d02x2W014='}} />
                    <Widget txt='Make real connections' source = {{uri: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg'}}/>
                    <Widget txt='Explore your industry ' source = {{uri: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
                </ScrollView>
            </View>
        </ScrollView>

    )
}

export default MainHomeScreen

const styles = StyleSheet.create({

    back: {
        flex:1,
        margin: 10,
    },

    contentWrapper:{
        backgroundColor: 'red',
        alignItems: 'center'
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ee7b30',
        marginBottom: 20,
        marginTop: 60,

    },

})
