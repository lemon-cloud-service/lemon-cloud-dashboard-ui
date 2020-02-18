import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/vuetify'
import ElementUI from 'element-ui'

import 'vuetify/dist/vuetify.min.css'
import 'element-ui/lib/theme-chalk/index.css'

import AdministratorService from '@/service/AdministratorService'

Vue.use(vuetify)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$store = store

AdministratorService.restoreLoginStateFromCache()

new Vue({
  router,
  store,
  vuetify: vuetify,
  render: h => h(App)
}).$mount('#app')
