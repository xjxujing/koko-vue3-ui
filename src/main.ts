import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/home/home.vue'
import Doc from './views/doc/doc.vue'


const history = createWebHashHistory()


const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc}
  ]
}) // ts 检测

const app = createApp(App)
app.use(router)
app.mount('#app')
