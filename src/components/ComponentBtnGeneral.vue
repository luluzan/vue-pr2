<script setup>
    defineProps({
    msg: {
        type: String,
        required: true
    }
    })
</script>

<template>
    <button class="btn-general">{{ msg }}</button>
</template>

<style>
.btn-general {
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

.btn-general:hover{
    font-size: medium;
    letter-spacing: 2px;
    box-shadow: 0 0 10px 5px rgba(154, 103, 231, 0.8);
}
</style>
