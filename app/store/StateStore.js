import {action, observable} from 'mobx';

export default class StateStore {

    @observable
    timer = 0;
    @observable
    timerInterval = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    resetTimer() {
        this.suspendTimer();
        this.timer = 0;
    }

    @action
    suspendTimer() {
        clearInterval(this.timerInterval)
    }

    @action
    startTimer() {
        this.timer = 0;
        this.timerInterval = setInterval(() => {
            this.timer += 1;
        }, 100);
    }
}

