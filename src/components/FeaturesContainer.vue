<template>
  <section class="features-container">
    <FeatureCircle icon="users" color="purple" title="Identify Goals"></FeatureCircle>
    <FeatureCircle icon="code" color="green" title="Situation Analysis"></FeatureCircle>
    <FeatureCircle icon="gear" color="pink" title="Tasks Settings"></FeatureCircle>
    <FeatureCircle icon="comments" color="yellow" title="Social Interaction"></FeatureCircle>
    <FeatureCircle icon="rocket" color="blue" title="Get Things Done"></FeatureCircle>
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
