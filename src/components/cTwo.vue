<script setup>
     import { ref } from 'vue';
     import descripcionImg from '../images/description-2-app.png';
     import ComponentBtnGeneral from './ComponentBtnGeneral.vue';
     const items = ref(["You can always add new tasks or change the settings of existing ones in your calendar view or the app control panel", "It's easy to stay focused on your most important daily activities that will get you closer to meeting your goals", "Use phone reminders to free up your long term memory which will reduce stress and make you more productive"]);
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
     <section class="calendar">
          <div class="calendar__div">
               <article class="calendar__text">
                    <h2>
                         {{ h2 }}
                    </h2>
                    <p>
                         <strong>Schedule tasks</strong>                     
                         {{ msg }}
                    </p>
                    <ul>
                         <li v-for="item in items" :key="item">{{ item }}</li>
                    </ul>
                    <div>
                         <ComponentBtnGeneral msg='Terms' />
                              &nbsp;
                         <ComponentBtnGeneral msg='Privacy' />
                    </div>
               </article>
               <article class="calendar__img">
                    <img :src='descripcionImg' alt="">
               </article>
          </div>
     </section>
</template>

<style scoped>
.calendar{
     background-color: #e5edf5;
}
.calendar__div{
     width: 90%;
     margin: 0 auto;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
}
.calendar__text{
     width: 45%;
     margin-left: 5%;
}

.calendar__text h2{
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 700;
     font-size: 2.5rem;
}

.calendar__text p{
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 400;
     font-size: 0.9rem;
     line-height: 1.6rem;
     margin-top: 5%;
}
.calendar__text ul{
     list-style-image: url('../images/checkVerde.png');
     margin: 0;
     padding: 0;
     color: var(--color-text);
     font-weight: 400;
     font-size: 0.9rem;
     line-height: 2rem;
     list-style-position: outside;
     padding-left: 5%;
     margin-top: 5%;
     margin-bottom: 5%;
}
.calendar__img{
     width: 55%;
}
.calendar__img img{
     width: 100%;
     height: 100%;
}
</style>