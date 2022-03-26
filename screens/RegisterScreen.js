import React, {useState} from 'react'
import { StyleSheet, View, TextInput,KeyboardAvoidingView } from 'react-native'
import { Text,Button, Image } from 'react-native-elements'
import {auth} from '../firebase'

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            authUser.user.updateProfile({
                displayName: firstName + ' ' + lastName,
                photoURL: imageUrl,

            })
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-80}>
            <View style={styles.container}>
                <Image source={{uri:'https://i.ibb.co/MgmMXtX/Eye-logo-bgremoved.png'}} style={styles.image}/>
                <Text h3>Let's get you started!</Text>
                <View style={{flexDirection:'row'}}>
                <TextInput placeholder='First Name' style ={styles.smallerInput} value={firstName} onChangeText={text=>setFirstName(text)}/>
                <TextInput placeholder= 'Last Name' style ={styles.smallerInput} value={lastName} onChangeText={text=>setLastName(text)}/>
                </View>
                <TextInput placeholder= 'Email' style ={styles.input} value={email} onChangeText={text=>setEmail(text)} />
                <TextInput placeholder= 'Password' secureTextEntry style ={styles.input} value={password} onChangeText={text=>setPassword(text)}/>
                <TextInput placeholder= 'Profile Picture URL (Optional)' style ={styles.input} value={imageUrl} onChangeText={text=>setImageUrl(text)}/>
                <Button title='Register' buttonStyle={styles.button} onPress={register} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#CAE5FF',
        width :300,
        height: 40,
        borderRadius: 20,
        paddingLeft:16,
        marginTop: 10,
    },
    smallerInput:{
        backgroundColor: '#CAE5FF',
        width :145,
        height: 40,
        borderRadius: 20,
        paddingLeft:16,
        marginTop: 10,
        marginRight: 5
    },
    button:{
        backgroundColor:'#6f8ab7', 
        borderRadius:20,
        width: 150,
        marginTop: 10
    },
    image:{
        width:120,
        height:100
    },
    container:{
        backgroundColor:'white',
         height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})
