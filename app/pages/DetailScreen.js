import { Button, View } from 'react-native'
import React from 'react'

export default function ({ navigation }) {

  return <View>
    <Button
      title="回去"
      onPress={() => navigation.goBack()}
    />
  </View>
}
