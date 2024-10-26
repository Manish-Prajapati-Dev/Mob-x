import { CountStore } from "./CountStore";

export interface MainRootStore {
    counter: CountStore,
    //add more store here
}

export class RootStore implements MainRootStore {
    counter: CountStore;
    /// add here store
    constructor() {
        this.counter = new CountStore(this)
        //this.store = new StoreName(this)
    }
}