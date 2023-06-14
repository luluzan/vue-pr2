<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import ComponentButtonFooter from './components/ComponentButtonFooter.vue'
import ComponentFooter from './components/ComponentFooter.vue'
import ComponentBarraIconos from './components/ComponentBarraIconos.vue';
</script>

<template>

<div class="container">
  <ComponentBarraIconos class="barraIconos"></ComponentBarraIconos>
  <ComponentButtonFooter></ComponentButtonFooter>
  <ComponentFooter></ComponentFooter>


</div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.barraIconos {
padding: 0;

}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
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

} */
</style>
