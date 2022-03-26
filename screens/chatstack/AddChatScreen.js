import React,{useLayoutEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input} from 'react-native-elements'
import {AntDesign, SimpleLineIcons} from 'react-native-vector-icons'
import { db } from '../../firebase'


const AddChatScreen = ({navigation}) => {
    const [input,setInput] = useState('')
    useLayoutEffect(()=>(
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chats',
        })
    ),[navigation])
    const createChat = async() =>{
        await db
        .collection('chats').add({
            chatName: input,

        }).then(()=>{
            navigation.goBack()
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Input 
            placeholder='Enter a Chat Name'
            value ={input}
            onChangeText = {(text)=>{
                setInput(text)
            }}
            leftIcon={
                <AntDesign name='wechat' size={24} color='black'/>
                }
                onSubmitEditing = {createChat}
            />
            <Button buttonStyle = {styles.button} onPress={createChat} title='Create New Chat'/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding: 30,
        height: '100%'

    },
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        margin: '5%',

    },

})
