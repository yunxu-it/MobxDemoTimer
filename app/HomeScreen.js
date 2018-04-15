import React from 'react'
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Color, gStyles, px2dp, } from './constant'
import { SafeAreaView } from 'react-navigation'

export default class HomeScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      data: [{
        'postId': 17,
        'forumId': 9,
        'threadId': 2,
        'isFirstPost': 0,
        'postTitle': '',
        'creatorId': 3,
        'creatorName': '郑逸丹',
        'creatorImgUrl': '/Content/Images/DefaultHeader/icon.png',
        'state': 1,
        'position': 3,
        'supports': 1,
        'content': '不错',
        'createTime': '2018-03-27 16:07:45',
        'replyCount': 1,
        'replies': [
          {
            'postId': 18,
            'forumId': 9,
            'threadId': 2,
            'parentId': 17,
            'postTitle': '回复 郑逸丹',
            'creatorId': 4,
            'creatorName': '张译元',
            'state': 1,
            'position': 1,
            'content': '你说的对',
            'createTime': '2018-03-27 16:30:16'
          }
        ]
      },
        {
          'postId': 8,
          'forumId': 9,
          'threadId': 2,
          'isFirstPost': 0,
          'postTitle': '',
          'creatorId': 3,
          'creatorName': '郑逸丹',
          'creatorImgUrl': '/Content/Images/DefaultHeader/icon.png',
          'state': 1,
          'position': 2,
          'supports': 0,
          'content': '那啥魔镜魔镜金马奖没什么男的酒吧街看不懂就看见可能是可敬的你不开假按揭坑我呢的框架那可就能打和巴萨就看不上尽快吧科技部那可就',
          'createTime': '2018-03-20 12:01:14',
          'replyCount': 3,
          'replies': [
            {
              'postId': 39,
              'forumId': 9,
              'threadId': 2,
              'parentId': 8,
              'postTitle': '回复 郑逸丹',
              'creatorId': 3,
              'creatorName': '郑逸丹',
              'state': 1,
              'position': 2,
              'content': '这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊',
              'createTime': '2018-04-02 14:24:52'
            },
            {
              'postId': 9,
              'forumId': 9,
              'threadId': 2,
              'parentId': 8,
              'postTitle': '回复 郑逸丹',
              'creatorId': 3,
              'creatorName': '郑逸丹',
              'state': 1,
              'position': 1,
              'content': 'aaabbb这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊这是一条神奇的天路啊ccc',
              'createTime': '2018-03-20 15:54:39'
            }
          ]
        }
      ]
    }
  }

  _renderReply = (replyCount, replies) => {
    return <View style={styles.replyArea}>
      {
        replies.map((reply) => <View style={styles.replyItem}>
          <Text style={styles.replyName}>{reply.creatorName}</Text>
          <Text style={styles.replyContent}>{reply.postTitle}: {reply.content}</Text>
          <Text style={styles.replyName}>回复</Text>
        </View>)
      }
      {
        replyCount > 2 && <Text style={styles.replyName}>查看全部{replyCount}条回复</Text>
      }
    </View>
  }

  _renderItem = (item) => {
    let comment = item.item
    return <View>
      <View style={styles.item}>
        <Image source={require('./image/icon_demo.png')} style={{width: px2dp(60), height: px2dp(60)}}/>
        <View style={{flex: 1, paddingLeft: px2dp(16)}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.creatorName}>{comment.creatorName}</Text>
            <Text style={styles.createTime}>{comment.createTime}</Text>
            <View style={{flex: 1}}/>
            <Image style={gStyles.icon} source={require('./image/zan.png')}/>
            <Text style={styles.count}>{comment.supports}</Text>
            <Image style={gStyles.icon} source={require('./image/huifu.png')}/>
            <Text style={styles.count}>{comment.replyCount}</Text>
          </View>
          <Text style={styles.commentContent}>{comment.content}</Text>
          {
            comment.replyCount > 0 && this._renderReply(comment.replyCount, comment.replies)
          }
        </View>
      </View>
    </View>
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.edit_view}>
          <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder={'已有66条评论，快来说说你的想法吧'}/>
          <Text style={styles.submit}>提交</Text>
        </View>
        <View
          style={{height: px2dp(2), backgroundColor: Color.gray_line}}/>
        <FlatList
          ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
          data={this.state.data}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: px2dp(2),
    backgroundColor: Color.gray_line
  },
  item: {
    padding: px2dp(24),
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  creatorName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.black_text
  },
  createTime: {
    fontSize: 14,
    marginLeft: px2dp(16),
    color: Color.black_text
  },
  count: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
    color: Color.gray_black_text
  },
  commentContent: {
    fontSize: 16,
    padding: 4,
    color: Color.black_text
  },
  replyArea: {
    padding: 4,
    backgroundColor: '#f5f5f5'
  },
  replyItem: {
    flexDirection: 'row'
  },
  replyName: {
    fontSize: 14,
    color: Color.primary_color
  },
  beReplyName: {
    fontSize: 14,
    marginLeft: px2dp(8),
    color: Color.black_text
  },
  replyContent: {
    flex: 1,
    paddingRight: 4,
    fontSize: 14,
    marginLeft: px2dp(8),
    color: Color.black_text
  },
  edit_view: {
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  input: {
    width: px2dp(530),
    height: px2dp(54),
    borderRadius: px2dp(64),
    marginLeft: px2dp(78),
    marginRight: px2dp(16),
    paddingLeft: px2dp(16),
    backgroundColor: '#e6e6e6',
    fontSize: 14
  },
  submit: {
    fontSize: 14,
    padding: px2dp(8),
    height: px2dp(54),
    backgroundColor: Color.primary_color,
    borderRadius: px2dp(16),
    overflow: 'hidden',
    color: 'white'
  }
})