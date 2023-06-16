<script setup>
  import ComponentBtnGeneral from '../components/ComponentBtnGeneral.vue';
  import ComponentIntro from '../components/ComponentIntro.vue';
  import ComponentNavbar from '../components/ComponentNavbar.vue';
  import compOne from './components/CompOne.vue';
  import CompRebeldin from './components/CompRebeldin.vue';
  import UserExperienceComponent from 'UserExperienceComponent.vue';
  import ComponentBarraIconos from 'ComponentBarraIconos.vue';
  import ComponentButtonFooter from 'ComponentButtonFooter.vue';
  import ComponentFooter from 'ComponentFooter.vue';
</script>

<template>
  <ComponentIntro />
  <header>
    <ComponentNavbar />
    <ComponentBtnGeneral msg="Login" />
    <ComponentBtnGeneral msg="Otra Cosa" />
  </header>
  <ComponentIntro />
    <compOne h2='Organize Your Time And Start Getting Results' msg='Sync is the first mobile app on the market to harness the power of social connections to help you stop procrastinating and start getting things done. Give it a try and see the changes right away' />
    <CompRebeldin h2='Organize Your Time And Start Getting Results' msg='Schedule tasks to keep track of their completion. Sync provides multiple scheduling options including alarms and reminders.' />

  <UserExperienceComponent />
  <ComponentBarraIconos />
  <ComponentButtonFooter />
  <ComponentFooter />
</template>


<style scoped>


</style>
