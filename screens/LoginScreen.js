import React, {useEffect,useState} from 'react'
import { StyleSheet, View,KeyboardAvoidingView, TextInput} from 'react-native'
import { Text,Input, Button, Image } from 'react-native-elements'
import {auth} from '../firebase'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                navigation.replace('Tabs')
            }
        })
        return unsubscribe;
    },[])
    const signIn=()=>{
        auth.signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-100}>
            <View style={{backgroundColor:'white', height:'100%', alignItems:'center', justifyContent:'center'}}>
                <Image source={{uri:'https://i.ibb.co/MgmMXtX/Eye-logo-bgremoved.png'}} style={styles.image}/>
                <Text h3 style={{fontWeight:'800'}}>Iris</Text>
                <Text p style={{fontWeight:'500'}}>Open your Eyes to New Opportunites</Text>
            <View style ={{backgroundColor: 'white', alignItems:'center'}}>
                <TextInput placeholder = 'Email' style = {styles.input} value={email} onChangeText={text=>setEmail(text)}/>
                <TextInput placeholder = 'Password' secureTextEntry style = {styles.input} value={password} onChangeText={text=>setPassword(text)}/>
                <View style={{flexDirection:'row'}}>
                    <Button title = 'Login' buttonStyle={styles.button} onPress={signIn}/>
                    <Button title = 'Register' buttonStyle={styles.button}
                    onPress={()=>navigation.navigate('PhoneNumber')}/>
                </View>
            </View>
            </View>
        </KeyboardAvoidingView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    input:{
        backgroundColor: '#CAE5FF',
        width :300,
        height: 40,
        borderRadius: 20,
        paddingLeft:16,
        marginTop: 10,

    },
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        width: 100,
        margin: 10,

    },
    image:{
        width:120,
        height:100
    }
})
