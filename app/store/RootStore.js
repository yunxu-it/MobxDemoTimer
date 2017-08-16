import UIStore from "./UIStore";
import {action, observable} from 'mobx';
import StateStore from "./StateStore";

export default class RootStore {
    constructor() {
        this.uiStore = new UIStore(this);
        this.stateStore = new StateStore(this);
    }
}
