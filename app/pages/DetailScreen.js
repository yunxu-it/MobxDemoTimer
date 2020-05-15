import { Text, View } from 'react-native'
import React from 'react'

export function ProfileScreen ({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.h1}>Hello {route.params?.id || 'Unknown'}!</Text>
      <Text style={styles.h1}>
        年龄：{' '}
        {route.params?.age ? route.params.age + ' ' + typeof route.params.age : 'undefined'}
      </Text>
      <Text style={styles.h1}>
        描述：{' '}
        {route.params?.age ? route.params.content : 'undefined'}
      </Text>
    </View>
  )
}

const styles = {
  h1: {
    fontSize: 20,
    color: '#333333'
  }
}
