/**
 * @author: LiXiaolong
 * @since: 2018/3/23
 * @desc:
 */

import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import Pdf from 'react-native-pdf'

export default class HomeScreen extends React.Component {

  render () {
    const source = {
      uri: 'http://10.10.7.187:8008/2013-2014-2/course/1/1/kejian/file/智能教学系统.pdf',
      cache: true
    };

    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          style={styles.pdf}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }, pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  }
});