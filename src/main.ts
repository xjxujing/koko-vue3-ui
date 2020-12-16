import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/home/home.vue'
import Doc from './views/doc/doc.vue'

import Switch from './components/Switch/Switch.vue'
import Button from './components/Button/Button.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Tabs from './components/Tabs/Tabs.vue'


const history = createWebHashHistory()


const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '/doc/switch', component: Switch},
        {path: '/doc/button', component: Button},
        {path: '/doc/dialog', component: Dialog},
        {path: '/doc/tabs', component: Tabs},
      ]
    }
  ]
}) // ts 检测

const app = createApp(App)
app.use(router)
app.mount('#app')
