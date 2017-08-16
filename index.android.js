/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import TimberView from "./app/TimberView";

export default class Test extends Component {
    render() {
        return <TimberView/>
    }
}

AppRegistry.registerComponent('Test', () => Test);
