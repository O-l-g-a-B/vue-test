import { createApp } from 'vue'
import App from './App.vue'
import components from './components'

import './assets/main.css'

const app = createApp(App)
app.use(components)
app.mount('#app')
