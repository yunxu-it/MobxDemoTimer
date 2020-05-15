import { Button, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen ({ navigation }) {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text
      style={styles.button}
      onPress={() => navigation.navigate('Profile', {
        id: 'admin',
        age: 22,
        content: '大佬',
      })}
    >Go to Admin Profile</Text>
    <Text
      style={styles.button}
      onPress={() => navigation.navigate('Chat', {
        content: '大佬'
      })}
    >Go to Default Chat</Text>
  </View>
}

const styles = {
  button: { margin: 10, backgroundColor: '#ff000f', padding: 8, color: '#ffffff' }
}
