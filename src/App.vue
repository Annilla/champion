<template lang='pug'>
  #app
    Downloadapp
    .mainview
      component(:is='navCover')
      component(:is='nav', v-on:navcover='coverOut', v-on:page='changeView', v-on:pagetitle='changeTitle')
      div(:class="{ pages: pageStart }")
        component(:is='currentView', v-on:page='changeView', v-on:nav='changeNav', v-on:popup='changePopup', v-on:pagetitle='changeTitle', v-on:tasktitle='changeTaskTitle', v-bind:init-title="this.pageTitle")
      component(:is='popup', v-on:popup='changePopup', v-bind:init-title="this.taskTitle")
</template>

<script>
import Downloadapp from './components/common/Downloadapp.vue'
import Nav from './components/common/Nav.vue'
import NavCover from './components/common/NavCover.vue'
import Login from './components/pages/Login.vue'
import MyTasks from './components/pages/MyTasks.vue'
import Comments from './components/common/Comments.vue'
import Projects from './components/pages/Projects.vue'
import Project from './components/pages/Project.vue'
import TeamMembers from './components/pages/TeamMembers.vue'
import Me from './components/pages/Me.vue'

export default {
  name: 'app',
  components: {
    Downloadapp,
    navCover: NavCover,
    hasNav: Nav,
    login: Login,
    myTasks: MyTasks,
    comments: Comments,
    projects: Projects,
    project: Project,
    teamMembers: TeamMembers,
    me: Me
  },
  data: function () {
    return {
      currentView: 'login',
      nav: '',
      popup: '',
      navCover: '',
      pageTitle: '',
      taskTitle: ''
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
    },
    changeTitle: function (data) {
      this.pageTitle = data
    },
    changeTaskTitle: function (data) {
      this.taskTitle = data
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
