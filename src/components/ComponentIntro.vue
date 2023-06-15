<!--<script>
export default {
  name: 'App',
};
</script>

<template>
  <h1>Mobile App Landing Page</h1>
  <p>
    Start focusing on your goals and get more things done with Sync mobile applications. It's the
    first app to harness the power of social connections to help you stay focused and get organized
  </p>
  <button class="btn donwload-apple"><font-awesome-icon :icon="['fab', 'apple']"></font-awesome-icon>DOWNLOAD</button>
  <button class="btn download-gplay"><font-awesome-icon
      :icon="['fab', 'google-play']"></font-awesome-icon>DOWNLOAD</button>
  <div class="header-iphone">
    <img class="header-iphone-img" src="src/images/header-iphone.png" alt="Iphone" width="921" height="578"
      loading="lazy" />
  </div>
  <section class="features-container">

    <div class="identify-goals">

      <div class="circle purple"><i class='fas fa-users'></i></div>
      <p>Identify Goals</p>

    </div>

    <div class="situation-analysis">

      <div class="circle green"><i class='fas fa-code'></i></div>
      <p>Situation Analysis</p>

    </div>

    <div class="tasks-settings">

      <div class="circle pink"><i class='fas fa-gear'></i></div>
      <p>Tasks Settings</p>

    </div>

    <div class="social-interaction">

      <div class="circle yellow"><i class='fas fa-comments'></i></div>
      <p>Social Interaction</p>

    </div>

    <div class="get-things-done">

      <div class="circle blue"><i class='fas fa-rocket'></i></div>
      <p>Get Things Done</p>

    </div>

  </section>
</template>

<style lang="css" scoped></style>-->

<template>
  <section class="header">
    <h1>Mobile App Landing Page</h1>
    <p class="leading__paragraph">
      Start focusing on your goals and get more things done with Sync mobile applications.
      It's the first app to harness the power of social connections to help you stay focused and get organized
    </p>
    <button class="btn donwload-apple">
      <i class="fa-brands fa-apple"></i>
      DOWNLOAD
    </button>
    <button class="btn download-gplay">
      <i class="fa-brands fa-google-play"></i>
      DOWNLOAD
    </button>
    <HeaderiPhone />
    <FeaturesContainer />
    <img src="src/images/decorative-green-diamond.svg" alt="decorative green diamond" class="green-diamond"
      loading="lazy">
    <img src="src/images/decorative-blue-circle.svg" alt="decorative blue circle" class="blue-circle" loading="lazy">
    <img src="src/images/decorative-yellow-circle.svg" alt="decorative yellow circle" class="yellow-circle"
      loading="lazy">
  </section>
</template>

<script>
import HeaderiPhone from './HeaderiPhone.vue';
import FeaturesContainer from './FeaturesContainer.vue';

export default {
  name: 'ComponentIntro',
  components: {
    HeaderiPhone,
    FeaturesContainer,
  },
};
</script>

