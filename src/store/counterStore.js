import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {

    state: () => ({
        counter: 0,
        numberOfChanges: 0
    }),

    actions: {
        incrementBy(value) {
            this.counter += value
            this.numberOfChanges ++
        }
    }

})