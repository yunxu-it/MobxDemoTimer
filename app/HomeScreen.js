/**
 * @author: LiXiaolong
 * @since: 2018/3/23
 * @desc:
 */

import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Button title="Video" onPress={() => {
          this.props.navigation.navigate("Video")
        }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});