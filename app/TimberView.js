import {action, observable} from 'mobx';
import {observer, inject, Provider} from 'mobx-react/native'
import React, {Component} from 'react';
import {Button, Text, View} from "react-native";
import RootStore from "./store/RootStore";
import StateStore from "./store/StateStore";

@inject("store") @observer
class TimerView extends Component {

    statStore;

    constructor(props) {
        super(props);
        this.statStore = props.store.stateStore;
    }

    render() {
        return (
            <View>
                <Button onPress={this.onReset.bind(this)} title="Reset"/>
                <Button onPress={this.add.bind(this)} title="Add"/>
                <Text>"Seconds passed: " {this.statStore.timer}</Text>
            </View>
        );
    }

    onReset() {
        this.statStore.resetTimer();
    }

    add() {
        this.statStore.add();
    }

}

export default class TimberView extends Component {
    render() {
        return <Provider store={new RootStore()}><TimerView/></Provider>
    }
}