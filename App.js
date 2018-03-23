/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from 'react-native-af-video-player'

const url = "http://10.10.7.187:8008/2013-2014-2/course/1/1/kejian/video/170331093811717750.mp4"

type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <VideoPlayer url={url}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

