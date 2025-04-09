<script setup>
defineProps({
  message: {
    type: String,
    required: false,
  },
})
</script>
<template>
    <div class="loading-container" >
        <label>Loading {{ message }}...</label>
    </div>
</template>
<style scoped>
.loading-container {
    width: 100%;
    text-align: center;
}
</style>