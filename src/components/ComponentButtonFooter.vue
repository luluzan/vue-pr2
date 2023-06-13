
<template>

<section class="container-feedback">

<div class="feedback">

  <div class="happy-users">
    <i class='fas fa-users'></i>
    <p class="number">231</p>
    <p class="p-feedback">Happy Users</p>
  </div>

  <div class="issues-solved">
    <i class='fas fa-code'></i>
    <p class="number">385</p>
    <p class="p-feedback">Issues Solved</p>
  </div>

  <div class="good-reviews">
    <i class='fas fa-gear'></i>
    <p class="number">159</p>
    <p class="p-feedback">Good Reviews</p>
  </div>

  <div class="case-studies">
    <i class='fas fa-comments'></i>
    <p class="number">127</p>
    <p class="p-feedback">Case Studies</p>
  </div>

  <div class="orders-received">
    <i class='fas fa-rocket'></i>
    <p class="number">211</p>
    <p class="p-feedback">Orders Received</p>
  </div>

</div>

</section>

    <section class="container-screens-last">

        <div class="download-iphone"></div>
        <img class="download-iphone-img" src="media/images/download-iphone.png" alt="" width="921" height="578"
        loading="lazy">
        

        <section class="container-screens-bottom">

        <p>Do you feel like you're wasting time with small stuff instead of working towards your goals? Start
            using
            Sync
            to organize your time and get a grip on your personal development</p>
        <button class="btn download-btn" type="button"><i class="fa-brands fa-apple"></i>DOWNLOAD</button>
        <button class="btn download-btn" type="button"><i class="fa-brands fa-google-play"></i>DOWNLOAD</button>

        </section>

    </section>

</template>

<style>

.container-screens-last {
  text-align: center;
  width: 80vw;
  margin: 0 auto;
}

.download-iphone {
  margin: 0 auto 60px;
}

.download-iphone-img {
  max-width: 100%;
  height: auto;
  margin-top: 140px;
  transition: transform .2s;
}

.download-iphone-img:hover {
  transform: scale(1.1);
}
.container-screens-bottom {
  width: 80vw;
  margin: 0 auto;
}

.container-screens-bottom p {
  font-size: 0.9375rem;
  font-size: clamp(0.9375rem, 0.9rem + 0.1875vw, 1.125rem);
  color: #868687;
  font-weight: 500;
  padding: 2rem 0;
  margin: 0 auto;
  line-height: 1.6rem;
  width: 90%;
}



</style>


<script>

</script>