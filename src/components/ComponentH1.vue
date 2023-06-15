<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="css" scoped>
h1 {
  font-size: 3rem;
  font-size: clamp(3rem, 2.8rem + 1vw, 4rem);
  margin: 0 auto;
}
</style>
