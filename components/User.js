import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, StyleSheet, View, Image } from 'react-native'


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