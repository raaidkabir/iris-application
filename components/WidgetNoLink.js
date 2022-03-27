import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { withTheme } from 'react-native-elements';


const WidgetNoLink = (props) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress = {props.onPress}>
            <View>
                <Image style={styles.img} source={props.source}/>
                <Text style={styles.caption} >{props.txt}</Text>
            </View>
            <View style={styles.labelContainer}/>
        </TouchableOpacity>
    )
}

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

export default WidgetNoLink;