// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'
import VueSession from 'vue-session'

require('./assets/css/styles.css')

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueSession,  {persists: true})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
