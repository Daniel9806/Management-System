import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import './assets/animate.css'
//Primevue imports
import 'primevue/resources/themes/arya-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';   
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import ToggleButton from 'primevue/togglebutton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);
//Primevue components
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('ToggleButton', ToggleButton);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.use(createPinia())
app.use(router)
app.mount('#app')


