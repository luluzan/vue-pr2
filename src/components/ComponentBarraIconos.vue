<template>

    <section class="container-feedback">

        <div class="feedback">

        <div class="happy-users">
            <img class="icon" src="../images/users.png" alt="users">
       
            <p class="number">231</p>
            <p class="p-feedback">Happy Users</p>
        </div>

        <div class="issues-solved">
            <img class="icon" src="../images/Image20230517112704.png" alt="tags verdes">    
           
            <p class="number">385</p>
            <p class="p-feedback">Issues Solved</p>
        </div>

        <div class="good-reviews">
            <img class="icon" src="../images/settings.png" alt="settings">
        
            <p class="number">159</p>
            <p class="p-feedback">Good Reviews</p>
        </div>

        <div class="case-studies">
            <img class="icon" src="../images/Image20230517112708.png" alt="">
            
            <p class="number">127</p>
            <p class="p-feedback">Case Studies</p>
        </div>

        <div class="orders-received">
            <img class="icon" src="../images/rocket.png" alt="">
           
            <p class="number">211</p>
            <p class="p-feedback">Orders Received</p>
        </div>

        </div>

    </section>

</template>

<style>
.icon {
 width: 50px;
}
.container-feedback {
  width: 100vw;
  background-color: #e8eff6;
}

.feedback {
  width: 80vw;
  padding: 90px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 100px;
  margin: 0 auto;
}

.p-feedback {
  margin: 0;
  font-size: 0.75rem;
}

.feedback .number {
  font-size: 2.875rem;
  font-size: clamp(2.875rem, 2.75rem + 0.625vw, 3.5rem);
  font-weight: 700;
  color: #000;
  margin: 0;
}

.fas {
  font-size: 6.25vmin;
}



</style>


<script>

</script>