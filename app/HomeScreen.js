/**
 * @author: LiXiaolong
 * @since: 2018/3/23
 * @desc:
 */

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Index</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})