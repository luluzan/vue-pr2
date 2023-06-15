<script setup>
   // import ComponentBtnGeneral from '.ComponentBtnGeneral.vue';
    //const logo = 'logo__.png';
</script>

<template>
    <nav class="menu-sup">
        <a href='index.html' class="logo-nav"></a>
        <img id="logo-home" alt="logo de la empresa" src="./images/logo__.png">
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
            <li class='around-download'><a href='#'>download</a></li>
        </ul>
    </nav>
</template>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    background-color: #F7FAFD;
    position: fixed;
    top: 0;
    left: 0;
}

.logo-nav{
    margin-left: 5vw;
}
.navbar {
    margin-right: 6vw;
}

.menu-sup{
    box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
}

#logo-home {
    width: 10vw;
    height: 5vh;
    margin-right: 2vh; 
    margin-left: 20px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 4vh;
    text-transform: uppercase;
    color: var(--color-almostblack);
    align-items: baseline;
    font-weight: 700;
}

.navbar li a {
    text-decoration: none;
    color: var(--color-almostblack);
}

.navbar li a:hover{
    color: var(--color-strawberrypink);
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: var(--color-white);
    color: var(--color-almostblack);
    padding: 10px;
    margin-top: 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dropdown:hover > a {
    color: var(--color-strawberrypink); 
}

.dropdown-menu li {
    display: block;
    padding: 1vh;
}

.dropdown-menu li:first-child {
    margin-top: 0; 
}

hr {
    border: none;
    border-top: 1px solid #f1ecec;
}

.around-download a{
    border: 2px solid var(--color-strawberrypink);
    border-radius: 25px;
    padding: 1vh 2vw;
    display: inline-block;
}
</style>
