import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import { Avatar, Text, Button, ListItem,CheckBox} from 'react-native-elements'
import {AntDesign, FontAwesome5, Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from '../../firebase'

const Interests = ({navigation}) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(true);
    const [check3, setCheck3] = useState(true);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
    return (
        <SafeAreaView style ={{backgroundColor:'white'}}>
            <View style={{alignItems: 'center', padding: 12}}>
            <Text style={{fontWeight:'700', fontSize:20}}>Select your Career Interests</Text>
            </View>
            <CheckBox left title="Computer Science" checked={check1} onPress={() => setCheck1(!check1)} />
            <CheckBox left title="
            Information Technology" checked={check2} onPress={() => setCheck2(!check2)} />
            <CheckBox left title="
            Data Science" checked={check3} onPress={() => setCheck3(!check3)} />
            <CheckBox left title="
            Electrical Engineering" checked={check4} onPress={() => setCheck4(!check4)} />
            <CheckBox left title="
            Computer Engineering" checked={check5} onPress={() => setCheck5(!check5)} />
            <CheckBox left title="
            Mechanical Engineering" checked={check6} onPress={() => setCheck6(!check6)} />
            <CheckBox left title="
            Industrial Engineering" checked={check7} onPress={() => setCheck7(!check7)} />
            <CheckBox left title="
            Biomedical Engineering" checked={check8} onPress={() => setCheck8(!check8)} />
            <CheckBox left title="
            Chemical Engineering" checked={check9} onPress={() => setCheck9(!check9)} />
            <CheckBox left title="
            Health Sciences" checked={check10} onPress={() => setCheck10(!check10)} />
            <Button buttonStyle = {styles.button} onPress={()=>navigation.replace('Profile')} title='Save'/>
        </SafeAreaView>
    )
}

export default Interests

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        width: 100,
        margin: 10,

    },
    button:{
        backgroundColor:'#6f8ab7',
        marginTop:10,
        borderRadius: 20,
        margin: '5%',

    },
})