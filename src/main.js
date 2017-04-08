// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

// Material UI Color
Vue.material.registerTheme('app', {
  primary: {
    color: 'teal',
    hue: 'A700'
  },
  accent: 'teal',
  warn: {
    color: 'yellow',
    hue: '700'
  },
  background: 'white'
})
Vue.material.setCurrentTheme('app')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
