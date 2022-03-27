import React, { useCallback, Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, StyleSheet, View, Image, Button} from 'react-native'


const User = (props) => {
    return (
        <TouchableOpacity style={styles.container}>  
            <View>
                <Image style={styles.img} source={props.source}/>
            </View>
            <View style={styles.activeIcon}/>
            <Text style={styles.name}>{props.name}</Text>
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
        width: 70,
        height: 70,
        borderRadius: 50,

    },
    container: {
        marginBottom: 20,
        marginRight: 15,
    },
    activeIcon: {
        backgroundColor: '#00ff18',
        height: 17,
        width: 17,
        borderRadius: 50,
        left: 6,
        bottom: 10,
    },
    name: {
        top: -5,
        fontSize: 11,
        alignSelf: 'center'
    }

})

export default User