<script setup>
import { ref, watchEffect } from 'vue'
import { usePriceStore } from '@/stores/price'

import Loading from '@/components/common/Loading/Loading.vue'
import Error from '@/components/common/Error/Error.vue'
import Price from '@/components/Price/Price.vue'

const{ VITE_APP_API_URL, VITE_APP_API_VEHICLE_TYPE_ENDPOINT, VITE_APP_PRICE_ENDPOINT } = import.meta.env 

const vehicleBasePrice = ref(0)
const selected = ref('')
const loading = ref(true)

const options = ref([])
const dataLoaded = ref(false)

const invalidVehicleBasePrice = ref(false)
const invalidVehicleType = ref(false)


watchEffect(async () => {
    const response = await fetch(`${VITE_APP_API_URL}${VITE_APP_API_VEHICLE_TYPE_ENDPOINT}`)
    const result = await response.json()
    options.value = result.data

    loading.value = false
})

const priceStore = usePriceStore()
const getPrices = async () => {
    cleanErrors()

    if (vehicleBasePrice.value === 0 || vehicleBasePrice === '') {
        invalidVehicleBasePrice.value = true
        return
    }

    if (selected.value === '') {
        invalidVehicleType.value = true
        return
    }

    const response = await fetch(`${VITE_APP_API_URL}${VITE_APP_PRICE_ENDPOINT}?price=${vehicleBasePrice.value}&type=${selected.value}`)
    const result = await response.json()

    priceStore.addPrice(result.data)
    dataLoaded.value = true
} 

const cleanErrors = () => {
    invalidVehicleBasePrice.value = false
    invalidVehicleType.value = false
} 
</script>
<template>
    <form>
        <div>
            <label>Vehicle Base Price</label>
            <input 
                v-model="vehicleBasePrice"
                class="input" 
                type="number"
                placeholder="398.00"
                @change="getPrices()"
            />
            <div v-if="invalidVehicleBasePrice">
                <Error message="Vehicle Base Price is required or higher than 0"></Error>
            </div>
        </div>
        <div>
            <label>Vehicle Type</label>
            <Loading v-if="loading" message="Vehicle Types"></Loading>
            <select v-else class="select" v-model="selected" @change="getPrices()">
                <option value="">-- Select a vehicle Type --</option>
                <option v-for="option in options" :value="option.id">
                    {{ option.name }}
                </option>
            </select>
            <div v-if="invalidVehicleType">
                <Error message="Vehicle Type is required"></Error>
            </div>
        </div>
    </form>
    <div v-if="dataLoaded">
        <Price></Price>
    </div>
</template>
<style scoped>
.input,
.select {
    max-width: 100%;
    width: 100%;
    padding: 1px;
}
</style>