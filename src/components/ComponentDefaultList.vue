<script setup>
     defineProps({
     msg: {
          type: String,
          required: true
          }
     })

</script>

<template>
     <!-- <ul> -->
          <li>{{ msg }}</li>
     <!-- </ul> -->
</template>

<!-- <style lang="css" scoped>
     ul{
          margin: 0;
          padding: 0;
          color: #ff0000;
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 2rem;
          list-style-type: square;
          list-style-position: outside;
          padding-left: 5%;
          margin-top: 5%;
     }
</style> -->
