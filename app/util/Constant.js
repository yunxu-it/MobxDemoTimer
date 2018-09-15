import { Dimensions, Platform } from 'react-native'

export const isAndroid = Platform.OS === 'android'
export let {width, height} = Dimensions.get('window')

const basePixel = 2                           // iphone6的像素密度
const basePixelWidth = 750
const basePixelHeight = 1334

const scale = width / basePixelWidth

export const px2dp = (px) => {
  return Math.round(px * scale + 1)
}

export const status_bar_height = px2dp(40) //ios 平台下的状态栏高度

export const Color = {
  accent_color: '#ff6700',
  primary_color: '#7ed789',
  primary_color_dark: '#018e38',
  secondary_color: '#b3b8bd',
  background_color: '#fafafa',
  black: '#000000',
  white: '#ffffff',

  // 文字
  gray_text: '#a8a8a8',
  c_grey_333: '#333333',
  c_grey_666: '#666666',
  c_grey_999: '#999999',
  c_grey_ccc: '#cccccc',
  c_grey_f5f5f5: '#f5f5f5', // 用于背景
  c_grey_e6e6e6: '#e6e6e6', // 用于分割线
  c_grey_bfbfbf: '#bfbfbf',

}

