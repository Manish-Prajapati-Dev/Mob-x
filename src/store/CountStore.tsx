import { action, computed, makeAutoObservable, observable } from "mobx";
import { MainRootStore } from "./RootStore";

export class CountStore {
    counter: number = 1;
    rootStore: MainRootStore;
    constructor(rootStore: MainRootStore) {
        makeAutoObservable(this, {
            counter: observable,
            increment: action,
            decrement: action,
            getCountValue: computed,
        })
        this.rootStore = rootStore
    }
    increment = () => {
        this.counter++;
    }
    decrement = () => {
        this.counter--;
    }
    get getCountValue() {
        return this.counter
    }
}