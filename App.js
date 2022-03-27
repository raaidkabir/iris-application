import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import LoginScreen from './screens/LoginScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import RegisterScreen from './screens/RegisterScreen';
import TabStack from './stacks/TabStack';
import PhoneNumber from './screens/PhoneNumber';
import Otp from "./screens/Otp";
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ title: 'Verify your Phone Number' }} />
          <Stack.Screen name="Otp" component={Otp} options={{ title: 'Enter the SMS Code' }} />
          <Stack.Screen name='Tabs' component={TabStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
