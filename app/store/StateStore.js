import {action, observable} from 'mobx';

export default class StateStore {

    constructor(rootStore) {
        this.rootStore = rootStore;
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @observable
    timer = 0;

    @action
    resetTimer() {
        this.timer = 0;
    }

    @action
    add() {
        this.timer += 1;
    }
}

