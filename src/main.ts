import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import '@/styles/index.css' // global css
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(store).use(router).use(ElementUI).mount('#app')
