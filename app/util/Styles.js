import { Color, px2dp } from './Constant'
import { StyleSheet } from 'react-native'

export const base_styles = StyleSheet.create({
  arrow_left: {
    width: px2dp(14), height: px2dp(24), paddingRight: px2dp(10)
  },
  arrow_down: {
    width: px2dp(24), height: px2dp(14), paddingTop: px2dp(10)
  },
  icon: {
    width: px2dp(32),
    height: px2dp(32)
  },
  task_icon: {
    width: px2dp(52), height: px2dp(52)
  },
  back_button: {
    width: px2dp(48),
    height: px2dp(48)
  },

  text_40_white: {
    fontSize: px2dp(44),
    color: Color.white,
  },
  text_check_in_36: {
    fontSize: px2dp(40),
    color: Color.white,
  },
  text_main_toolbar_title: {
    fontSize: px2dp(30),
    color: Color.c_grey_333,
  },
  text_toolbar_title: {
    fontSize: px2dp(24),
    color: Color.c_grey_333,
  },
  text_16_highlight: {
    fontSize: px2dp(20),
    color: Color.accent_color,
  },
  text_18_highlight: {
    fontSize: px2dp(22),
    color: Color.accent_color,
  },
  text_24_333: {
    fontSize: px2dp(28),
    color: Color.c_grey_333
  },
  text_22_333: {
    fontSize: px2dp(26),
    color: Color.c_grey_333
  },
  text_22_999: {
    fontSize: px2dp(26),
    color: Color.c_grey_999
  },
  text_20_333: {
    fontSize: px2dp(24),
    color: Color.c_grey_333,
  },
  text_20_999: {
    fontSize: px2dp(24),
    color: Color.c_grey_999,
  },
  text_18_333: {
    fontSize: px2dp(22),
    color: Color.c_grey_333,
  },
  text_18_666: {
    fontSize: px2dp(22),
    color: Color.c_grey_666,
  },
  text_18_999: {
    fontSize: px2dp(22),
    color: Color.c_grey_999,
  },
  text_16_333: {
    fontSize: px2dp(20),
    color: Color.c_grey_333,
  },
  text_16_666: {
    fontSize: px2dp(20),
    color: Color.c_grey_666,
  },
  text_16_999: {
    fontSize: px2dp(20),
    color: Color.c_grey_999,
  },
  text_14_333: {
    fontSize: px2dp(18),
    color: Color.c_grey_333,
  },
  text_16_white: {
    fontSize: px2dp(20),
    color: Color.white,
  },
})