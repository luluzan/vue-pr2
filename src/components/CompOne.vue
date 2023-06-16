<script setup>
     import { ref } from 'vue';
     import descripcionImg from '../images/description-1-app.png';
     import ComponentBtnGeneral from './ComponentBtnGeneral.vue';
     const items = ref(["Analyse and evaluate your current status and productivity", "It'Begin monitoring your day to day routine with Sync app", "See the improved results in no more than a couple of weeks"]);
     defineProps({
     msg: {
          type: String,
          required: true
          },
     h2:{
          type: String,
          required: true
     }
     })   
</script>

<template>
     <section class="description">
          <article class="description__img">
               <img :src='descripcionImg' alt="">
               <!-- <img src="../images/description-1-app.png" alt=""> -->
          </article>
          <article class="description__text">
               <h2>
                    {{ h2 }}
               </h2>
               <p>
                    {{ msg }}
               </p>
               <ul>
                    <li v-for="item in items" :key="item">{{ item }}</li>
               </ul>
               <div>
                    <ComponentBtnGeneral msg='LIGTHBOX' />
               </div>
          </article>
     </section>
</template>

<style>
.description{
     width: 90%;
     margin: 0 auto;
     grid-area: "section4";
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     margin-bottom: 2rem;
}
.description__img{
     width: 55%;
}
.description__img img{
     width: 100%;
     height: 100%;
}

.description__text{
     width: 45%;
}
.description__text h2{
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 700;
     font-size: 2.5rem;
}
.description__text p{
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 400;
     font-size: 0.9rem;
     line-height: 1.6rem;
     margin-top: 5%;
}
.description__text ul{
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 400;
     font-size: 0.9rem;
     line-height: 2rem;
     list-style-type: square;
     list-style-position: outside;
     padding-left: 5%;
     margin-top: 5%;
}
</style>
