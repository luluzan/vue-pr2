<script setup>
import Component_h1 from './components/Component_h1.vue'
import ComponentDefaultList from './components/ComponentDefaultList.vue'
import ComponentBtnGeneral from './components/ComponentBtnGeneral.vue'
import UserExperienceComponent from './components/UserExperienceComponent.vue'
</script>

<template>
  <header>
    <Component_h1 msg="Mobile App Landing Page"></Component_h1>
    <ComponentBtnGeneral msg1="Login" />
    <ComponentBtnGeneral msg1="Otra Cosa" />
  </header>
  
  <main>
    <ul>
      <ComponentDefaultList  msg="Analyse and evaluate your current status and productivity" />
      <ComponentDefaultList  msg="Begin monitoring your day to day routine with Sync app" />
      <ComponentDefaultList  msg="See the improved results in no more than a couple of weeks" />
    </ul>
    <UserExperienceComponent msg="User testimonials"/>
  </main>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-size: clamp(3rem, 2.8rem + 1vw, 4rem);
  margin: 0;
}
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

header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
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
}
</style>
