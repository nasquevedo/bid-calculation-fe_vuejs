<script setup>
defineProps({
    message: {
        type: String,
        required: true
    }
})
</script>

<template>
    <span class="error">{{ message }}</span>
</template>

<style scoped>
.error {
    color: #f00;
    font-size: 12px;
}
</style>