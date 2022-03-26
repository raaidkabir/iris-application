import React, {useLayoutEffect,useState,useEffect} from 'react'
import { StyleSheet, View,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native'
import { Text } from 'react-native-elements'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import CustomListItem from '../../components/CustomListItem'
import { auth,db } from '../../firebase'
import {AntDesign, SimpleLineIcons} from 'react-native-vector-icons'

const MainChatScreen = ({navigation}) => {
    const [chats,setChats] = useState([])
    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot((snapshot)=>
        setChats(
            snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),
            }))
        ))
        return unsubscribe
    }, [])
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '',
            headerStyle: {backgroundColor: '#6f8ab7'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'black',
            headerLeft: ()=>(
                <View style={{marginLeft: 20}}>
                    <Text style={{color:"white", fontSize: 25, fontWeight:'700'}}>Chat</Text>
                </View>
                ),
            headerRight: ()=>(
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width:80,
                    marginRight:20
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name='camerao' size={24} color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={()=>(
                        navigation.navigate('AddChat')
                    )} >
                        <SimpleLineIcons name='pencil' size ={24} color='white'/>
                    </TouchableOpacity>
                </View>
            )

        })
    })
    const enterChat = (id,chatName)=>{
        navigation.navigate('Chat',
        {
            id,
            chatName,
        })
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
            {chats.map(({id,data:{chatName}})=>(
                <CustomListItem key={id} id={id} chatName = {chatName}  enterChat = {enterChat}/>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainChatScreen

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }
})