<template>
  <div class="circle_container">
    <div class="circle" :class="color">
      <i :class="['fas', 'fa-' + icon]"></i>
    </div>
    <p class="circle_title">{{ title }}
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'FeatureCircle',
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.circle_title {
  color: #000;
  font-size: 1rem;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
  font-weight: 700;
  text-align: center;
}
</style>

