import React, { useState, useRef } from "react";
import {
 SafeAreaView,
 StyleSheet,
 View,
 TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Button, Image, Text} from 'react-native-elements'
import PhoneInput from "react-native-phone-number-input";
import { sendSmsVerification } from "../api/verify";

const PhoneNumber = ({ navigation }) => {
 const [value, setValue] = useState("");
 const [formattedValue, setFormattedValue] = useState("");
 const phoneInput = useRef<PhoneInput>(null);

 return (
   <>
     <View style={styles.container}>
       <SafeAreaView style={styles.wrapper}>
       <Image source={{uri:'https://i.ibb.co/MgmMXtX/Eye-logo-bgremoved.png'}} style={styles.image}/>
         <View style={styles.welcome}>
           <Text>Let's find out if you are human!</Text>
         </View>
         <PhoneInput
           ref={phoneInput}
           defaultValue={value}
           defaultCode="US"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           autoFocus
         />

         <Button buttonStyle = {styles.button} title = "Recieve an SMS" onPress={() => {
            sendSmsVerification(formattedValue).then((sent) => {
              navigation.navigate("Otp", { phoneNumber: formattedValue });
            });
           }}/>
           <View height = {130}></View>
       </SafeAreaView>
     </View>
   </>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "white",
 },

 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },

 button:{
  backgroundColor:'#6f8ab7',
  marginTop:10,
  borderRadius: 20,
  margin: '5%',

},

 buttonText: {
   color: "white",
   fontSize: 14,
 },

 welcome: {
   padding: 20,
 },

 status: {
   padding: 20,
   marginBottom: 20,
   justifyContent: "center",
   alignItems: "flex-start",
   color: "gray",
 },
 image:{
  width:120,
  height:100
},
});

export default PhoneNumber;