import { StyleSheet, View } from 'react-native'
import { Text, Image, Button} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import User from '../../components/User'

const MatchedMentor = () => {
  return (
    <SafeAreaView style ={{backgroundColor:'white',alignItems: 'center', padding: 20, height: '100%'}}>
        <Text style={{fontSize: 35, fontWeight: '700', textAlign: 'center'}} >You Matched with ... </Text>
        <Image style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80'}}/>
        <Text style={{fontSize: 35, fontWeight: '400', textAlign: 'center'}} > Kimberly O'Neal </Text>
        <Text style={{fontSize: 18, fontWeight: '400', textAlign: 'center', padding: 12}} > Kimberly is highly skilled in your interests of Information Technology and Data Science! Connect with her to find out more.</Text>
        <Button title='Chat with Her' buttonStyle = {styles.button} />
    </SafeAreaView>
  )
}

export default MatchedMentor

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 20

    },
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        width: 150,
        margin: 10,

    },
})