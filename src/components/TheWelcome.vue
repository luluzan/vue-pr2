<script setup>
  import ComponentDefaultList from './ComponentDefaultList.vue';
</script>

<template>
  <ul>
    <ComponentDefaultList  msg="Analyse and evaluate your current status and productivity" />
    <ComponentDefaultList  msg="Begin monitoring your day to day routine with Sync app" />
    <ComponentDefaultList  msg="See the improved results in no more than a couple of weeks" />
  </ul>
</template>

<style lang="css" scoped>
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
</style>