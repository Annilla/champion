<template lang='pug'>
  #app
    Downloadapp
    .mainview
      div(:class="{ navCover: navOpen }")
      component(:is='nav', v-on:navcover='coverOut')
      div(:class="{ pages: pageStart }")
        component(:is='currentView', v-on:page='changeView', v-on:nav='changeNav')
</template>

<script>
import Downloadapp from './components/common/Downloadapp.vue'
import Nav from './components/common/Nav.vue'
import Login from './components/pages/Login.vue'
import MyTasks from './components/pages/MyTasks.vue'

export default {
  name: 'app',
  components: {
    Downloadapp,
    hasNav: Nav,
    login: Login,
    MyTasks: MyTasks
  },
  data: function () {
    return {
      currentView: 'login',
      nav: '',
      navOpen: false
    }
  },
  computed: {
    pageStart: function () {
      return this.currentView !== 'login'
    }
  },
  methods: {
    changeView: function (data) {
      this.currentView = data
    },
    changeNav: function (data) {
      this.nav = data
    },
    coverOut: function (data) {
      this.navOpen = !data
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
    .navCover {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: transparent;
      z-index: 1;
    }
    .pages {
      padding-left: 60px;
    }
  }
}
</style>
