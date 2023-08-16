import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import PrimeVueComponents from './utils/primevue-components';


import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import './assets/css/global.css'; // Importar el archivo de estilos globales




const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);
app.use(PrimeVueComponents);

app.mount('#app');