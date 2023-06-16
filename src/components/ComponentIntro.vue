<script>
  import HeaderiPhone from './HeaderiPhone.vue';
  import FeaturesContainer from './FeaturesContainer.vue';
  import ComponentBtnGeneral from './ComponentBtnGeneral.vue';
  export default {
    name: 'ComponentIntro',
    components: {
      HeaderiPhone,
      FeaturesContainer,
    }
  };
</script>

<template>
  <section class="header">
    <h1>Mobile App Landing Page</h1>
    <p class="leading__paragraph">
      Start focusing on your goals and get more things done with Sync mobile applications.
      It's the first app to harness the power of social connections to help you stay focused and get organized
    </p>
    <ComponentBtnGeneral msg="DOWNLOAD" />
    <ComponentBtnGeneral msg="DOWNLOAD" />
    <!-- <button class="btn donwload-apple">
      <i class="fa-brands fa-apple"></i>
      DOWNLOAD
    </button>
    <button class="btn download-gplay">
      <i class="fa-brands fa-google-play"></i>
      DOWNLOAD
    </button> -->
    <HeaderiPhone />
    <FeaturesContainer />
    <img src="src/images/decorative-green-diamond.svg" alt="decorative green diamond" class="green-diamond"
      loading="lazy">
    <img src="src/images/decorative-blue-circle.svg" alt="decorative blue circle" class="blue-circle" loading="lazy">
    <img src="src/images/decorative-yellow-circle.svg" alt="decorative yellow circle" class="yellow-circle"
      loading="lazy">
  </section>
</template>