<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import ComponentDefaultList from './components/ComponentDefaultList.vue';
</script>

<template>
  <main>
    <ul>
      <ComponentDefaultList  msg="Analyse and evaluate your current status and productivity" />
      <ComponentDefaultList  msg="Begin monitoring your day to day routine with Sync app" />
      <ComponentDefaultList  msg="See the improved results in no more than a couple of weeks" />
    </ul>
  </main>
</template>

<style scoped>
ul{
  margin: 0;
  padding: 0;
  color: #ff0000;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 2rem;
  list-style-type: square;
  list-style-position: outside;
  padding-left: 5%;
  margin-top: 5%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
