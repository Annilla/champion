<template lang='pug'>
  #app
    Downloadapp
    .mainview
      component(:is='nav')
      component(:is='currentView', v-on:page='changeView', v-on:nav='changeNav')
</template>

<script>
import Downloadapp from './components/common/Downloadapp.vue'
import Nav from './components/common/Nav.vue'
import Login from './components/pages/Login.vue'
import MyTaskTime from './components/pages/MyTaskTime.vue'

export default {
  name: 'app',
  components: {
    Downloadapp,
    hasNav: Nav,
    login: Login,
    myTaskTime: MyTaskTime
  },
  data: function () {
    return {
      currentView: 'login',
      nav: ''
    }
  },
  methods: {
    changeView: function (data) {
      this.currentView = data
    },
    changeNav: function (data) {
      this.nav = data
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/variables.scss';

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  line-height: 1.5rem;
  color: $accent;
  .mainview {
    display: none;
    @media screen and (min-width: $pcWid) {
      display: block;
    }
    @media screen and (width: $pcWid) and (height: 1366px) {
      display: none;  // ipadPro
    }
  }
}
</style>
