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
import Component_h1 from './components/Component_h1.vue'
import ComponentDefaultList from './components/ComponentDefaultList.vue';
import ComponentBtnGeneral from './components/ComponentBtnGeneral.vue';
</script>

<template>
  <ComponentIntro />
  <header>

    <ComponentNavbar/>
    <Component_h1 msg="Mobile App Landing Page"></Component_h1>
    <ComponentBtnGeneral msg="Login" />
    <ComponentBtnGeneral msg="Otra Cosa" />
  </header>

  <main>
    <ul>
      <ComponentDefaultList  msg="Analyse and evaluate your current status and productivity" />
      <ComponentDefaultList  msg="Begin monitoring your day to day routine with Sync app" />
      <ComponentDefaultList  msg="See the improved results in no more than a couple of weeks" />
    </ul>
  </main>
</template>


<style scoped>


</style>
