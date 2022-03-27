import React, {useCallback, Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, Linking } from 'react-native';
import { withTheme } from 'react-native-elements';


const Widget = (props) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>Linking.openURL(props.url)}>
            <View>
                <Image style={styles.img} source={props.source}/>
                <Text style={styles.caption} >{props.txt}</Text>
            </View>
            <View style={styles.labelContainer}/>
            <OpenURLButton url="https://google.com"/>
        </TouchableOpacity>
    )
}


const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <TouchableOpacity title={children} onPress={handlePress} />;
  };

const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 200,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    container: {
        flex: 1,
        height: 255,
        marginRight: 10,
        marginBottom: 10
    },
    caption: {
        top: '3%',
        left: '4%',
        color: 'white',
        fontWeight: '300',
        fontSize: 20
    },
    labelContainer: {
        backgroundColor: '#6f8ab7',
        height: '15%',
        bottom: '9%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        zIndex: -100
    }
})

export default Widget;