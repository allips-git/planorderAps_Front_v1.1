import './assets/main.css'
import 'primeicons/primeicons.css';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'
import DataTable from "primevue/datatable";

import Select from 'primevue/select';


import Chart from 'primevue/chart';

import router from './router'

const app = createApp(App);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
 });
app.use(createPinia())
app.use(router)
app.component("DataTable", DataTable);
app.component("Chart", Chart);
app.component("Select", Select);

app.mount('#app')
