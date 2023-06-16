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


