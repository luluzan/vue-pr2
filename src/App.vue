<script>
import ComponentIntro from './components/ComponentIntro.vue';
export default {
  name: 'App',
  components: {
    ComponentIntro,
  },
};
</script>

<template>
  <section class="header">
    <ComponentIntro />
  </section>
</template>

<style scoped></style>
