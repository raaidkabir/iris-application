import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();
const TabStack = ({navigation}) => {
  useLayoutEffect(()=>(
    navigation.setOptions({
      headerShown: false
    })
    ),[navigation])
    return (
        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#ee7b30',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="eye" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Bids"
          component={ChatStack}
          options={{
            tabBarLabel: 'Chat with Professionals',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}

export default TabStack

const styles = StyleSheet.create({})
