<script>
import ComponentIntro from './components/ComponentIntro.vue';
export default {
  name: 'App',
  components: {
    ComponentIntro,
  },
};
</script>




<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'



import ComponentBtnGeneral from './components/ComponentBtnGeneral.vue';
import ComponentNavbar from './components/ComponentNavbar.vue';
import ComponentButtonFooter from './components/ComponentButtonFooter.vue';
import ComponentFooter from './components/ComponentFooter.vue';
import ComponentBarraIconos from './components/ComponentBarraIconos.vue';
</script>

<template>
  <ComponentIntro />
  <header>

    <ComponentNavbar/>
    <Component_h1 msg="Mobile App Landing Page"></Component_h1>
    <ComponentBtnGeneral msg="Login" />
    <ComponentBtnGeneral msg="Otra Cosa" />
  </header>

<div class="container">
  <ComponentBarraIconos class="barraIconos"></ComponentBarraIconos>
  <ComponentButtonFooter></ComponentButtonFooter>
  <ComponentFooter></ComponentFooter>


</div>
</template>


<style scoped>


</style>
