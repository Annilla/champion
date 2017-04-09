<template lang='pug'>
section.myTaskTime
  h1 我的待辦清單
  .sort 排序
    md-button.btn(:class="{ active: act[0].active }", @click.native='toggleActive(0)')
      svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
        path.st0(d="M20,10c-5.5,0-10,4.5-10,10s4.5,10,10,10c5.5,0,10-4.5,10-10C30,14.5,25.5,10,20,10C20,10,20,10,20,10z M20,28c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S24.4,28,20,28z")
        path.st0(d="M20.5,15H19v6l5.3,3.1l0.8-1.2l-4.5-2.7V15z")
    md-button.btn(:class="{ active: act[1].active }", @click.native='toggleActive(1)')
      svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
        path.st0(d="M30,17.1c0-1.2-1-2.1-2.2-2.1h-2.6v-4.5H14.7V15h-2.5C11,15,10,15.9,10,17.1l0,10.3c0,1.1,1,2.1,2.1,2.1c0,0,0,0,0.1,0l15.6,0c1.2,0.1,2.2-0.9,2.2-2.1L30,17.1z M16.7,12.5h6.5V15h-6.5V12.5z M27.8,27.5l-15.7,0c-0.1,0-0.1-0.1-0.1-0.1l0-10.3c0-0.1,0.1-0.1,0.1-0.1c0,0,0,0,0,0l0,0l2.6,0v0h10.5v0l2.7,0c0.1,0,0.1,0.1,0.1,0.1l0,10.3C28,27.4,27.9,27.5,27.8,27.5z")
  component(:is='currentView', v-on:page='changeView')
</template>

<script>
import MyTasksTime from './MyTasksTime.vue'

export default {
  components: {
    myTasksTime: MyTasksTime
  },
  data: function () {
    return {
      currentView: 'myTasksTime',
      act: [
        { active: true },
        { active: false }
      ]
    }
  },
  methods: {
    toggleActive: function (data) {
      const act = this.act
      for (var i = 0; i < act.length; i++) {
        act[i].active = false
      }
      act[data].active = true
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/variables.scss';

.myTaskTime {
  padding-top: 20px;
  h1, .sort {
    margin-left: 40px;
  }
  h1 {
    color: $primary;
    font-size: 40px;
    padding: 0;
    margin-bottom: 20px;
  }
  .sort {
    color: $gray1;
    line-height: 40px;
    .btn {
      min-width: initial;
      min-height: initial;
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      svg {
        .st0 {
          fill: $gray1;
        }
      }
      &.active {
        svg {
          .st0 {
            fill: $primary;
          }
        }
      }
      &:first-child {
        margin-left: 10px;
      }
    }
  }
}
</style>
