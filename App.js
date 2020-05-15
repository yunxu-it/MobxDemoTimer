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
import { ProfileScreen } from './app/pages/DetailScreen'
import ChatScreen from './app/pages/ChatScreen'
import HomeScreen from './app/pages/HomeScreen'

const HomeStack = () => {
  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Profile" component={ProfileScreen}/>
    </HomeStack.Navigator>
  )
}

export default function App () {
  const Stack = createStackNavigator()

  const config = {
    HomeStack: {
      path: 'stack',
      initialRouteName: 'Profile',
      screens: {
        Home: 'home',
        Profile: {
          path: 'user/:id/:age',
          parse: {
            id: id => `is, ${id}`,
            age: Number
          }
          /*
            接收参数格式 mychat://stack/user/winxo/15?content=这是内容
           */
        }
      }
    },
    Chat: {
      path: 'chat',
      // 可接受参数 mychat://chat?content=这是内容
    }
  }

  const linking = {
    prefixes: ['mychat://'],
    config
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeStack} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



