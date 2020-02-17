import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/vuetify'
import ElementUI from 'element-ui'

Vue.use(vuetify)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
