<script setup>
import { usePriceStore } from '@/stores/price'
import Fee from './Fee/Fee..vue';

const priceStore = usePriceStore()
const { fees } = priceStore.price
</script>

<template>
    <div class="price__container">
        <div class="item__container resalted">
            <label>Vehicle Base Price</label>
            <label>{{ priceStore.price.vehicle_base_price }}</label>
        </div>
        <div class="item__container">
            <label>Vehicle type</label>
            <label>{{ priceStore.price.vehicle_type }}</label>
        </div>
        <div class="item__container resalted">
            <label>Total Fees</label>
            <label>{{ priceStore.price.total_fees }}</label>
        </div>
        <div v-for="fee in fees">
            <Fee :label="fee.name" :fee="fee.value"></Fee>
        </div>
        <hr></hr>
        <div className="item__container resalted">
            <label>Total</label>
            <label>{{ priceStore.price.total }}</label>
        </div>
    </div>
</template>

<style scoped>
.price__container {
    border-top: 1px dashed #000;
    margin-top: 20px;
    padding: 20px;
}

.item__container {
    display: flex;
    justify-content: space-between;
}

.resalted {
    font-weight: bold;
}

.subitem {
    font-size: 14px;
}
</style>