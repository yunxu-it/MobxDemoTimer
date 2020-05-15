/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer, useLinking } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen } from './app/pages/DetailScreen'
import ChatScreen from './app/pages/ChatScreen'
import HomeScreen from './app/pages/HomeScreen'

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
        // 接收参数格式 mychat://stack/user/winxo/15?content=这是内容
      }
    }
  },
  Chat: {
    path: 'chat',
    // 可接受参数 mychat://chat?content=这是内容
  }
}

const HomeStack = () => {
  const MyStack = createStackNavigator()

  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Home" component={HomeScreen}/>
      <MyStack.Screen name="Profile" component={ProfileScreen}/>
    </MyStack.Navigator>
  )
}

const Stack = createStackNavigator()

export default function App () {
  const ref = React.useRef()

  const { getInitialState } = useLinking(ref, {
    prefixes: ['mychat://'],
    config
  })

  const [isReady, setIsReady] = React.useState(false)
  const [initialState, setInitialState] = React.useState()

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then(state => {
        if (state !== undefined) {
          setInitialState(state)
        }
        setIsReady(true)
      })
  }, [getInitialState])

  if (!isReady) {
    return null
  }

  return (
    <NavigationContainer initialState={initialState} ref={ref}>
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeStack}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



