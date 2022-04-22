import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import "bootstrap-icons/font/bootstrap-icons.css"
createApp(App).use(BootstrapIconsPlugin).use(store).use(router).mount('#app')
