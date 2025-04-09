<script setup>
import Form from './Form/Form.vue'
import { usePriceStore } from '@/stores/price'

const priceStore = usePriceStore()

</script>

<template>
    <div class="container">
        <Form></Form>
    </div>
</template>

<style scoped>
.container {
    display: block;
    margin: 2rem auto;
    border: 1px solid black;
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    background-color: #FFFFFF;
}

@media (max-width: 992px) {
    .container {
        width: 100%;
    }
}
</style>