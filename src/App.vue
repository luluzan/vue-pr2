<script setup>
import Component_h1 from './components/Component_h1.vue'
</script>

<template>
  <header>
    <Component_h1 msg="Mobile App Landing Page"></Component_h1>
  </header>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-size: clamp(3rem, 2.8rem + 1vw, 4rem);
  margin: 0;
}
</style>
