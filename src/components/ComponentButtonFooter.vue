
<template>



  <section class="container-screens-last">

    <img class="download-iphone-img" src="../images/download-iphone.png" alt="foto telefono">
    
    <section class="container-screens-bottom">
      <p>Do you feel like you're wasting time with small stuff instead of working towards your goals? Start using Syncto organize your time and get a grip on your personal development</p>
      <button class="btn download-btn" type="button"><i class="fa-brands fa-apple"></i>DOWNLOAD</button>
      <button class="btn download-btn" type="button"><i class="fa-brands fa-google-play"></i>DOWNLOAD</button>

    </section>

  </section>

</template>

<style>

.container-screens-last {
  text-align: center;
  width: 90vw;
  height: 90vw;
  margin: 0 auto;
}

.download-iphone {
  margin: 0 auto 60px;
}

.download-iphone-img {
  max-width: 80%;
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
.btn {
  font-size:x-small;
    font-weight: bolder;
    text-transform: uppercase;
    padding: 1rem 3rem;
    margin-left: 1rem;
    background-color: #FF4B63;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.8s ease;
    border: none;
}
.btn:hover {
  font-size: medium;
    letter-spacing: 2px;
    box-shadow: 0 0 10px 5px rgba(154, 103, 231, 0.8);
}


</style>


<script>

</script>