import { Button, Text, View } from 'react-native'
import React from 'react'

export default function ({ navigation, route }) {

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Hello {route.params?.content || '未知用户'}!</Text>
    <Button
      title="上一页"
      onPress={() => navigation.goBack()}
    />
  </View>
}
