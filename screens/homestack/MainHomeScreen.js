import React, {useLayoutEffect} from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native'
import {AntDesign, FontAwesome, Ionicons} from 'react-native-vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Button} from 'react-native-elements'
import Widget from '../../components/Widget'
import WidgetNoLink from '../../components/WidgetNoLink'
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
                    <User name="Kimberly O'Neal" source={{uri: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80'}}/>
                    <User name="Sandeep Narayan" source={{uri: 'https://images.unsplash.com/photo-1618404166229-c7b4b3f8aa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80'}}/>
                    <User name="Linda Rodgers" source={{uri: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
                    <User name="Ricky Jones" source={{uri: 'https://images.unsplash.com/photo-1534493872551-856c2bb2279f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}}/>
                    <User name="Sharon Kim" source={{uri: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
                    <User name="Nobly Hong" source={{uri: 'https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80'}}/>
                    <User name="Shana Riley" source={{uri: 'https://images.unsplash.com/photo-1627393100177-b4297e79a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}}/>
                </ScrollView>
                <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>Upcoming Events</Text>
                <ScrollView horizontal>
                    <Widget url="https://intouch.ccgmag.com/mpage/beya-home" txt='BEYA Career Fair' source = {{uri: 'https://www.blackengineer.com/wp-content/themes/blackengineer/timthumb/timthumb.php?src=https%3A%2F%2Fwww.blackengineer.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fbeya_768-1.jpg&h=500&w=770&zc=2&a=tb&ct=1'}}/>
                    <Widget url="https://www.nsbe.org/"txt='NSBE Stem Conference' source = {{uri:'https://miro.medium.com/max/640/0*TAeArJ_QAI7G3eX2'}} />
                    <Widget url="https://www.shpe.org/events/nc2021"txt='SHPE Career Fair' source = {{uri: 'https://www.shpe.org/uploads/images/events/NC2021/_1200x630_crop_center-center_82_none/nc2021large.png?mtime=1605302531'}}/>
                </ScrollView>
                <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>Networking</Text>
                <ScrollView horizontal>
                    <WidgetNoLink onPress={()=>(navigation.navigate('MatchedMentor'))} txt='Match with a Mentor' source = {{uri:'https://media.istockphoto.com/photos/group-analysis-of-digital-data-picture-id954307646?k=20&m=954307646&s=612x612&w=0&h=TM-27FHNSJ7gz8SZDYq6hFv86KbTc98am5d02x2W014='}} />
                    <WidgetNoLink txt='One-on-One Appointment' source = {{uri: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg'}}/>
                    <WidgetNoLink txt='Explore your Industry' source = {{uri: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}/>
                </ScrollView>
                <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>Career Planning</Text>
                <ScrollView horizontal>
                    <WidgetNoLink onPress={()=>(navigation.navigate('ResumeReview'))} txt='Resume Review' source = {{uri:'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg'}} />
                    <WidgetNoLink txt='Interview Preperation' source = {{uri: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg'}}/>
                    <WidgetNoLink txt='Internship/Job Advice' source = {{uri: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg'}}/>
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
        fontSize: 35,
        marginLeft: '2%',
        fontWeight: 'bold',
        color: '#ee7b30',
        marginBottom: 30,
        marginTop: 40,

    },

})
