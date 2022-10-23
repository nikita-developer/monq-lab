import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Dropdown from 'primevue/dropdown'

const app = createApp(App)

app.use(PrimeVue).component('Dropdown', Dropdown).mount('#app')
