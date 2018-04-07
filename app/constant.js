import { Dimensions, StyleSheet } from 'react-native'

export let {width, height} = Dimensions.get('window')

const basePixel = 2                           // iphone6的像素密度
const basePixelWidth = 750
const basePixelHeight = 1334

const scale = width / basePixelWidth

export const px2dp = (px) => {
  return Math.round(px * scale + 1)
}



const Constant = {
  // 成功标志
  flag_success: 'success',
  sync_limit_time: 10000

}

export const Color = {
  primary_color: '#15c288',
  secondary_color: '#b3b8bd',
  background_color: '#fcfcfc',
  inactive_text: '#5f5f5f',
  black_text: '#333333',
  gray_black_text: '#666666',
  gray_text: '#a8a8a8',
  highlight_text: '#fd7f52',
  gray_line: '#f2f2f2',
  item_background: '#ecf7f9'
}

export default Constant

export const gStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
