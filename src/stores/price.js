import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePriceStore = defineStore('price',{
    store: () => ( { price: {} }),
    actions: {
        addPrice(priceInfo) {
            this.price = priceInfo
        }
    }
})