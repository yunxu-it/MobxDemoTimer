import {action, observable} from 'mobx';

export default class UIStore {
    constructor(rootStore) {

    }

}

/*
Session 信息
应用已经加载了的相关信息
不会存储到后端的信息
全局性影响 UI 的信息
    窗口尺寸
    可访问性信息
    当前语言
    当前活动主题
用户界面状态瞬时影响多个、毫不相关的组件:
    当前选择
    工具栏可见性, 等等
    向导的状态
    全局叠加的状态
*/
