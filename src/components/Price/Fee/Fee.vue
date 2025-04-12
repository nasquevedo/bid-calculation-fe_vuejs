<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  fee: {
    type: Float32Array,
    required: true
  }
})
</script>

<template>
    <div class="item__container subitem">
      <label>{{ label }}</label>
      <label>{{ fee }}</label>
    </div>
</template>

<style scoped>
.subitem {
    font-size: 14px;
    padding: 0 10px 0;
}
</style>