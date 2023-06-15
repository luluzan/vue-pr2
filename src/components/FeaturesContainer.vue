<template>
  <section class="features-container">
    <FeatureCircle icon="users" color="purple">Identify Goals</FeatureCircle>
    <FeatureCircle icon="code" color="green">Situation Analysis</FeatureCircle>
    <FeatureCircle icon="gear" color="pink">Tasks Settings</FeatureCircle>
    <FeatureCircle icon="comments" color="yellow">Social Interaction</FeatureCircle>
    <FeatureCircle icon="rocket" color="blue">Get Things Done</FeatureCircle>
  </section>
</template>

<script>
import FeatureCircle from './FeatureCircle.vue';

export default {
  name: 'FeaturesContainer',
  components: {
    FeatureCircle,
  },
};
</script>
