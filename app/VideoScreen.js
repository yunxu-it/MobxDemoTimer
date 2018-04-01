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
      fullScreen: false,
      maxProgress: 30
    }
  }

  onFullScreen (fullScreen) {
    this.setState({fullScreen})
  }

  render () {
    return (
      <View style={styles.container}>
        <Video url={url}
               maxProgress={this.state.maxProgress}
               title={'测试视频'}
               onProgress={(e) => {
                 console.log('onProgress ' + JSON.stringify(e))
               }}
               onSeek={(e) => {
                 console.log('onSeek ' + JSON.stringify(e))
               }}
               ref={(ref) => {this.video = ref}}
        />
        <Text> 当前最大进度：{this.state.maxProgress}</Text>
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