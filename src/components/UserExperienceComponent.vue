<script setup>
</script>

<template>
  <section class="user_testimonials">
   <article class="class_user_exp">
    <h2>User Testimonials</h2>
    <div class="clmns">
      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">I love using Sync for my personal development needs.It meets all my requirements and it helps a lot with focusing skills. </p>
        <p class="username_style">Rick Jones - Designer</p>
      </div>

      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">After trying out a large number of personal coaching I decided to give Sync a try and what a wonderful surprize it was</p>
        <p class="username_style">Linda Marquez - Developer</p>
      </div>

      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">Never dreamed I could learn so fast how to focus on my personal goals and improve my life to levels I never thought possible. </p>
        <p class="username_style">Jay Frisco - Marketer</p>
      </div>
    </div>

    <div class="custom_icons">
      <div class="logo_user_exp">
        <img src="../images/customer-logo-1.png" width="250px"/>
      </div>
      <div class="logo_user_exp">
        <img src="../images/customer-logo-2.png" width="250px"/>
      </div>
      <div class="logo_user_exp">
        <img src="../images/customer-logo-3.png" width="250px"/>
      </div>
      <div class="logo_user_exp">
        <img src="../images/customer-logo-4.png" width="250px"/>
      </div>
      <div class="logo_user_exp">
        <img src="../images/customer-logo-5.png" width="250px"/>
      </div>
    </div>
    <div class="clmns">
      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">I got so much value form using Sync in my dayli life for wich I am very grateful and would recommend it to everybody. </p>
        <p class="username_style">Frank Gibson - Manager</p>
      </div>

      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">If you has great goals but cannot figure out a way to keep focused then you should definitely give Sync a try and see the results.</p>
        <p class="username_style">Rita Longmile - Designer</p>
      </div>

      <div class="user_testimonial_columns">
        <div class="stars">
          <img src="../images/star-solid.svg">
        </div>
        <hr class="hr_class">
        <p class="p_user_exp">I've been looking for great orgenizer for such a long time but now I am really happy that I found Sync. It's been working great. </p>
        <p class="username_style">Jones Smith - Developer</p>
      </div>
    </div>
   </article>
  </section>
</template>


<style scoped>

.user_testimonials{
  width: 100%;
  margin: 20px;
  background-color:rgb(240, 242, 242);
  padding: 0em 1em;
}
  h2{
    font-size: 4em;
    text-align: center;
    padding-top: 2em;
    margin:0 auto;
  }
.user_testimonial_columns{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; /*centra stars*/
  justify-content: center;
  margin: 3%;
  min-width:380px;
}
 .stars{
  display: flex;
  flex-direction: row;
  margin:20px; 
  justify-content: center;
  width: 12vw; 
  height: 5vh;
} 
.clmns{
  display: flex;
  flex-direction: row;
}
.p_user_exp{
  /* color: var(--color-gray); */
  color:gray;
  font-style: italic;
  font-size: 33px;
  /* font-size:clamp(2rem,1rem +10vw, 4rem); */

  margin: 5px;
}
.hr_class{
  width: 20%;
  height: 0.5%;
  margin:15px 15px; 
  /* background-color: var(--color-gray); */
  background-color:rgb(218, 215, 215);
}
.username_style{
  font-weight:bold;
  font-style:normal;
  font-size: 20px;
}
.custom_icons{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap ;
  justify-content: center;
  background-color:white;
  border:none;
  margin:40px;

}
.logo_user_exp{
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
  margin: 3vw;
  box-sizing: content-box;
}
</style>