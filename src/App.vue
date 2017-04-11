<template lang='pug'>
  #app
    Downloadapp
    .mainview
      component(:is='navCover')
      component(:is='nav', v-on:navcover='coverOut', v-on:page='changeView')
      div(:class="{ pages: pageStart }")
        component(:is='currentView', v-on:page='changeView', v-on:nav='changeNav', v-on:popup='changePopup')
      component(:is='popup', v-on:popup='changePopup')
</template>

<script>
import Downloadapp from './components/common/Downloadapp.vue'
import Nav from './components/common/Nav.vue'
import NavCover from './components/common/NavCover.vue'
import Login from './components/pages/Login.vue'
import MyTasks from './components/pages/MyTasks.vue'
import Comments from './components/common/Comments.vue'
import Projects from './components/pages/Projects.vue'

export default {
  name: 'app',
  components: {
    Downloadapp,
    navCover: NavCover,
    hasNav: Nav,
    login: Login,
    myTasks: MyTasks,
    comments: Comments,
    projects: Projects
  },
  data: function () {
    return {
      currentView: 'login',
      nav: '',
      popup: '',
      navCover: ''
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
      this.navCover = !data ? 'navCover' : ''
    },
    changePopup: function (data) {
      this.popup = data
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/base.scss';

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
    .pages {
      padding-left: 60px;
    }
  }
}
</style>
