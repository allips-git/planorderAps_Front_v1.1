import './assets/main.css'
import 'primeicons/primeicons.css';
import './assets/primevue_custom.scss';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';



import App from './App.vue'
import DataTable from "primevue/datatable";

import Select from 'primevue/select';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'; 
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog'; 
import Tag from 'primevue/tag';
import Tooltip from 'primevue/tooltip';

import Chart from 'primevue/chart';

import router from './router'

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        },
        overlay: {
            popover: {
                padding: '0.75rem',
            },
        },
        colorScheme: {
            light: {
                formField: {
                    placeholderColor: '{surface.400}',
                    disabledBackground: '{surface.100}',
                },
            },
        }
    }, 
});

const app = createApp(App);
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
 });
app.use(createPinia())
app.component("DataTable", DataTable);
app.component("Chart", Chart);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Dialog', Dialog);
app.component('Tag', Tag);
app.component('Select', Select);
app.directive('tooltip', Tooltip);
app.use(router)

app.mount('#app')
