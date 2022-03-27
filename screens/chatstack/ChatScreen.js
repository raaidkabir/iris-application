import { StatusBar } from 'expo-status-bar'
import React, {useLayoutEffect,useState} from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'
import { Avatar, Text } from 'react-native-elements'
import {AntDesign, FontAwesome, Ionicons} from 'react-native-vector-icons'
import { db, auth } from '../../firebase'
import firebase from 'firebase'

const ChatScreen = ({navigation, route}) => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerBackTitleVisible: false,
            headerTitleAlign: 'left',
            headerStyle: {backgroundColor:'#6f8ab7'},
            headerTitle: ()=>(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Avatar rounded source = {{uri: messages[0]?.data.photoURL}} />
                <Text style={{color:'white', alignSelf:"center", fontWeight:'700'}}>{route.params.chatName}</Text>
                </View>
        ),
        headerLeft: ()=>(
            <TouchableOpacity
            style={{marginLeft:10}}
            onPress={navigation.goBack}>
                <AntDesign name='arrowleft' size={24} color='white' />
            </TouchableOpacity>
        ),
        headerRight: ()=>(
            <View
            style={{flexDirection:'row',
            justifyContent:'space-between',
            width:80,
            marginRight:20}}>
            <TouchableOpacity>
                <FontAwesome name='video-camera' size ={24} color = 'white' />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name='call' size ={24} color = 'white' />
            </TouchableOpacity>
            </View>
        )

        })
    }, [navigation, messages])

    const sendMessage = () =>{
        Keyboard.dismiss()
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })
        setInput('')
    }
    useLayoutEffect(() => {
        const unsubscribe = db
        .collection('chats')
        .doc(route.params.id)
        .collection('messages')
        .orderBy('timestamp')
        .onSnapshot((snapshot)=>
        setMessages(
            snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data()
            }))
        ))
        return unsubscribe
    }, [route])
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <StatusBar style='light'/>
            <KeyboardAvoidingView
            behavior={Platform.OS==='ios'? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={90}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                <ScrollView contentContainerStyle={{paddingTop:15}}>
                    {messages.map(({id,data})=>(
                        (data.displayName === auth.currentUser.email) ? (
                            <View key={id} style={styles.receiver}>
                                <Avatar 
                                position='absolute'
                                bottom = {-15}
                                left ={-5}
                                containerStyle={{
                                    position: 'absolute',
                                    bottom: -15,
                                    left: -5
                                }}
                                source={{uri:data.photoURL}}
                                rounded
                                size={30}
                                />
                                <Text style={styles.receiverText}>{data.message}</Text>
                            </View>
                        ):(
                            <View style={styles.sender} key={id}>
                                <Avatar 
                                position='absolute'
                                bottom = {-15}
                                right ={-5}
                                containerStyle={{
                                    position: 'absolute',
                                    bottom: -15,
                                    right: -5
                                }}
                                source={{uri:data.photoURL}}
                                rounded
                                size={30}/>
                                <Text style={styles.senderText}>{data.message}</Text>
                            </View>
                        )
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput placeholder='Iris Message' style={styles.textInput}
                    value ={input} onChangeText={(text)=>(
                        setInput(text)
                    )} 
                    onSubmitEditing={sendMessage}/>
                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                    <Ionicons name='send' size ={24} color = '#6f8ab7' />
                    </TouchableOpacity>
                </View>
                </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    footer:{
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        padding: 15
    },
    textInput:{
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        backgroundColor: '#ECECEC',
        padding: 10,
        color: 'grey',
        borderRadius: 30
    },
    receiver:{
        padding:15,
        backgroundColor: '#ECECEC',
        alignSelf: 'flex-end',
        borderRadius: 20,
        marginRight:15,
        marginBottom:'5%',
        maxWidth:'80%',
        position: 'relative'

    },
    sender:{
        padding:15,
        backgroundColor: '#6f8ab7',
        alignSelf: 'flex-start',
        borderRadius: 20,
        marginBottom:'5%',
        maxWidth:'80%',
        position: 'relative',
        marginLeft: 15
    },
    senderText:{
        color:'white',
        fontWeight: '500',
        marginLeft:5,
        marginBottom: 7
    },
    senderName:{
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: 'white'
    },
    receiverText:{
        color:'black',
        fontWeight: '500',
        marginLeft:10,
    }

})
