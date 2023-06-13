<template>

    <section class="container-feedback">

        <div class="feedback">

        <div class="happy-users">
            <img src="../images/users.png" alt="users">
            <i class='fas fa-users'></i>
            <p class="number">231</p>
            <p class="p-feedback">Happy Users</p>
        </div>

        <div class="issues-solved">
            <img src="../images/Image20230517112704.png" alt="tags verdes">    
            <i class='fas fa-code'></i>
            <p class="number">385</p>
            <p class="p-feedback">Issues Solved</p>
        </div>

        <div class="good-reviews">
            <img src="../images/settings.png" alt="settings">
            <i class='fas fa-gear'></i>
            <p class="number">159</p>
            <p class="p-feedback">Good Reviews</p>
        </div>

        <div class="case-studies">
            <img src="../images/Image20230517112708.png" alt="">
            <i class='fas fa-comments'></i>
            <p class="number">127</p>
            <p class="p-feedback">Case Studies</p>
        </div>

        <div class="orders-received">
            <img src="../images/rocket.png" alt="">
            <i class='fas fa-rocket'></i>
            <p class="number">211</p>
            <p class="p-feedback">Orders Received</p>
        </div>

        </div>

    </section>

</template>

<style>

.container-feedback {
  width: 100vw;
  background-color: #e8eff6;
}

.feedback {
  width: 80vw;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
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

.fa-users {
  color: #aa7eec;
  font-size: 6.25vmin;
}

.fa-code {
  color: #19ca94;
  font-size: 6.25vmin;
}

.fa-gear {
  color: #ff556e;
  font-size: 6.25vmin;
}

.fa-comments {
  color: #ffb30f;
  font-size: 6.25vmin;
} */

.fa-rocket {
  color: #4fb9e8;
  font-size: 6.25vmin;
}

</style>


<script>

</script>