/**
 * @author: LiXiaolong
 * @since: 2018/3/23
 * @desc:
 */

import React from 'react'
import { Alert, View, StyleSheet, ScrollView, Text } from 'react-native'
import Video from './components/VideoScrollHandler'

// const url = 'http://10.10.7.187:8008/2013-2014-2/course/1/1/kejian/video/170331093811717750.mp4'
const url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'

export default class VideoScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      fullScreen: false
    }
  }

  onFullScreen (fullScreen) {
    this.setState({fullScreen})
  }

  render () {
    return (
      <View style={styles.container}>
        <Video url={url}
               onProgress={(e) => {
                 console.log(e)
               }}
               ref={(ref) => { this.video = ref }}
        />
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