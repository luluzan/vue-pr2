<script setup>
import logo from './images/logo.svg';
import ComponentBtnGeneral from './components/ComponentBtnGeneral.vue';
</script>

<template>
    
    
    <nav class="menu-sup">
        <a href='index.html' class="logo-nav">
        <img :src="logo" alt="logo empresa" class="logo_nav"/>
        </a>nnpm
            
    <ul class='navbar'>
        <li><a href="#description">description</a></li>
        <li><a href="#">features</a></li>
        <li><a href='#screens'>screens</a></li>
        <li class="dropdown"><a href="#">Extra</a></li>
            <ul class="dropdown-menu">
                <li><a href="#">Article Details</a></li>
                <hr>
                <li class='item2'><a href="#">Terms and Conditions</a></li>
                <hr>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        <li class='around-download'><ComponentBtnGeneral/>prueba</li>
    </ul>
    </nav>


</template>