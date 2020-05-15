/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Button, SafeAreaView, StatusBar, Text, View } from 'react-native'
import DetailScreen from './app/pages/DetailScreen'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen ({ navigation }) {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
}

