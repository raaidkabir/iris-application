import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Text, Button} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../../firebase'

const MainProfileScreen = ({navigation}) => {
    const signOutUser = ()=>{
        auth.signOut()
        .then(()=>{
            navigation.replace('Login')
        })
    }
    return (
        <SafeAreaView style ={{backgroundColor:'white'}}>
        <View style={{backgroundColor:'white', height:'100%',alignItems:'center'}}>
            <Avatar rounded source={{uri: auth.currentUser.photoURL}} size={200} />
            <Text h3>{auth.currentUser.displayName}</Text>
            <Button title='Sign Out' onPress={signOutUser} buttonStyle={styles.button}/>
        </View>
        </SafeAreaView>
    )
}

export default MainProfileScreen

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        width: 100,
        margin: 10,

    },
})
