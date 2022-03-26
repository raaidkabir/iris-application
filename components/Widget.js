import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { withTheme } from 'react-native-elements';


const Widget = (props) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} >
            {/*<Ionicons name ='add-circle' filled color={'#ee7b30'} size={90}/>*/}
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
    },
    caption: {
        top: '3%',
        left: '4%',
        color: 'white',
        fontWeight: 'normal',
        fontSize: 22
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