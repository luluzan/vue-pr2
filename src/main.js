import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'

import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faCode, faGear, faComments, faRocket } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-free/css/all.css';


library.add(faApple, faGooglePlay, faUsers, faCode, faGear, faComments, faRocket);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);


app.use(router)

app.mount('#app')

