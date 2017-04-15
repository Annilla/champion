<template lang='pug'>
section.project
  h1 {{ this.initTitle }}
  md-layout
    md-layout.sort(md-flex="33")
      div(:class="{ hide: sortHide }") 排序
        md-button.btn(:class="{ active: act[0].active }", @click.native='toggleActive(0)')
          svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
            circle.st1(cx="26.6", cy="17.6", r="2.4")
            path.st0(d="M26.6,15.1c-1.2,0-2.2,0.9-2.4,2.1H12.4v1.5h12c0.4,0.8,1.2,1.3,2.1,1.3c1.3,0,2.4-1.1,2.4-2.4S27.9,15.1,26.6,15.1zM26.6,19c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4C28,18.4,27.4,19,26.6,19z")
            circle.st1(cx="26.6", cy="25.7", r="2.4")
            path.st0(d="M26.6,23.2c-1.1,0-2.1,0.8-2.4,1.9h-10c-0.4,0-0.7-0.3-0.7-0.7V11.9H12v12.5c0,1.2,1,2.1,2.2,2.1h10.1c0.3,0.9,1.2,1.6,2.3,1.6c1.3,0,2.4-1.1,2.4-2.4S27.9,23.2,26.6,23.2z M26.6,27.1c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S27.4,27.1,26.6,27.1z")
          md-tooltip(md-direction="bottom") 依分類排序
        md-button.btn(:class="{ active: act[1].active }", @click.native='toggleActive(1)')
          svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
            path.st0(d="M20,10c-5.5,0-10,4.5-10,10s4.5,10,10,10c5.5,0,10-4.5,10-10C30,14.5,25.5,10,20,10C20,10,20,10,20,10z M20,28c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S24.4,28,20,28z")
            path.st0(d="M20.5,15H19v6l5.3,3.1l0.8-1.2l-4.5-2.7V15z")
          md-tooltip(md-direction="bottom") 依時間排序
    md-layout.sort(md-flex="33")
      md-button.btn(:class="{ active: pro[0].active }", @click.native='changePage(0)')
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
          rect.st0(x="15.4", y="10.9", width="13.6", height="2")
          rect.st0(x="10.9", y="10.9", width="2.2", height="2")
          rect.st0(x="15.4", y="27", width="13.6", height="2")
          rect.st0(x="10.9", y="27", width="2.2", height="2")
          rect.st0(x="15.4", y="19", width="13.6", height="2")
          rect.st0(x="10.9", y="19", width="2.2", height="2")
        md-tooltip(md-direction="bottom") 待辦清單
      md-button.btn(:class="{ active: pro[1].active }", @click.native='changePage(1)')
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
          path.st0(d="M25.7,22.6c0.3-0.2,0.6-0.5,0.9-0.7c1.1-1.1,1.8-2.7,1.8-4.3v0c0-1.6-0.6-3.1-1.8-4.3c-1.1-1.1-2.5-1.7-4.1-1.7c-1.3-2.6-4.4-3.9-7.3-3c-1.5,0.5-2.8,1.6-3.5,3c-0.7,1.4-0.8,3.1-0.3,4.6c0.8,2.4,3,4,5.6,4.1c1,2,3.2,3.3,5.5,3.3c0,0,0,0,0.1,0c4.4,0,8.3,3,8.8,6.6H13.8c0.1-0.6,0.3-1.2,0.5-1.8h0l0-0.1c0.7-1.6,2-2.9,3.7-3.7c0.4-0.2,0.5-0.7,0.3-1c-0.2-0.3-0.6-0.5-1-0.3c-1.7,0.8-3.1,2.1-4,3.6H8.6c0.4-2.4,2-4.5,4.2-5.5c0.4-0.2,0.5-0.7,0.3-1c-0.2-0.3-0.6-0.5-1-0.3c-3,1.4-5,4.3-5.1,7.6v0.8h5.6c-0.3,0.8-0.4,1.6-0.5,2.5l0,0.3l0,0v0.5h20.7V31C32.9,27.2,29.8,23.8,25.7,22.6z M17.8,17.6c0-2.5,2-4.5,4.5-4.5c0,0,0,0,0,0c2.5,0,4.5,2,4.5,4.5c0,2.5-2,4.5-4.5,4.5c0,0,0,0,0,0C19.8,22.1,17.8,20.1,17.8,17.6z M18,13.4c-1.1,1.1-1.8,2.7-1.8,4.3c0,0.4,0,0.8,0.1,1.2c-0.9-0.2-1.8-0.6-2.5-1.3c-0.9-0.9-1.3-2-1.3-3.2s0.5-2.4,1.3-3.2s2-1.3,3.2-1.3c0,0,0,0,0,0c1.5,0,2.9,0.8,3.7,2C19.8,12,18.8,12.6,18,13.4z")
        md-tooltip(md-direction="bottom") 專案成員
      md-button.btn(:class="{ active: pro[2].active }", @click.native='changePage(2)')
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
          path.st0(d="M12.4,32c-1.2,0-2.3-0.5-3.1-1.4c-1.7-2-1.7-4.9,0-6.8L21.9,9.9c2-2.3,5.5-2.5,7.8-0.5c0.2,0.2,0.4,0.3,0.5,0.5c1.1,1.3,1.7,2.9,1.7,4.6c0,1.7-0.6,3.3-1.7,4.6l-9.5,10.4l-1-1.1L29.3,18c1.8-2,1.8-5,0-7c-1.5-1.8-4.2-1.9-6-0.4c-0.1,0.1-0.3,0.3-0.4,0.4L10.3,24.8c-1.2,1.3-1.2,3.4,0,4.7c1,1.2,2.8,1.3,4,0.3c0.1-0.1,0.2-0.2,0.3-0.3L24,19.1c0.6-0.7,0.6-1.7,0-2.4c-0.5-0.6-1.4-0.7-2-0.1c0,0-0.1,0.1-0.1,0.1l-6.3,6.9l-1-1.1l6.3-6.9c1-1.1,2.7-1.3,3.9-0.3c0.1,0.1,0.2,0.2,0.3,0.3c1.1,1.3,1.1,3.2,0,4.5l-9.5,10.4C14.7,31.5,13.6,32,12.4,32")
        md-tooltip(md-direction="bottom") 附件
      md-button.btn(:class="{ active: pro[3].active }", @click.native='changePage(3)')
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
          path.st0(d="M30,9.6h-1.2v1.6H30c0.1,0,0.4,0.3,0.4,0.8v2.4H9.6V12c0-0.5,0.3-0.8,0.4-0.8h1.2V9.6H10C8.8,9.7,7.9,10.8,8,12v17.6c0,1.3,1.1,2.4,2.4,2.4h19.2c1.3,0,2.4-1.1,2.4-2.4V12C32.1,10.8,31.2,9.7,30,9.6z M30.4,29.6c0,0.4-0.4,0.8-0.8,0.8H10.4c-0.4,0-0.8-0.4-0.8-0.8V16h20.8V29.6z")
          path.st0(d="M13.6,12.8c0.4,0,0.8-0.4,0.8-0.8V8.8C14.4,8.4,14,8,13.6,8c-0.4,0-0.8,0.4-0.8,0.8V12C12.8,12.4,13.2,12.8,13.6,12.8z")
          path.st0(d="M26.4,12.8c0.4,0,0.8-0.4,0.8-0.8V8.8c0-0.4-0.4-0.8-0.8-0.8s-0.8,0.4-0.8,0.8V12C25.6,12.4,26,12.8,26.4,12.8z")
          rect.st0(x="16", y="9.6", width="8", height="1.6")
          path.st0(d="M18.9,22v5H21v-7.2h-1.2c-0.4,0.3-0.8,0.5-1.2,0.7c-0.4,0.2-0.8,0.3-1.2,0.4v1.6c0.3,0,0.6-0.1,0.8-0.2C18.5,22.2,18.7,22.1,18.9,22z")
        md-tooltip(md-direction="bottom") 行事曆
      md-button.btn(:class="{ active: pro[4].active }", @click.native='changePage(4)')
        svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 40 40", xml:space="preserve")
          path.st0(d="M20,8c6.6,0,12,5.4,12,12s-5.4,12-12,12S8,26.6,8,20C8,13.4,13.4,8,20,8z M20,30.7c5.9,0,10.7-4.8,10.7-10.7S25.9,9.3,20,9.3S9.3,14.1,9.3,20C9.3,25.9,14.1,30.7,20,30.7z")
          path.st0(d="M20.4,14.5c-0.3,0-0.5-0.1-0.7-0.3s-0.3-0.4-0.3-0.7s0.1-0.5,0.3-0.7s0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3s0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7S20.7,14.5,20.4,14.5z M21.2,27h-1.6V17h1.6V27z")
        md-tooltip(md-direction="bottom") 專案資訊
  .content
    component(:is='currentView', v-on:popup='popup', v-on:tasktitle='changeTaskTitle')
</template>

<script>
import ProjectTime from './ProjectTime.vue'
import ProjectCategory from './ProjectCategory.vue'
import ProjectMembers from './ProjectMembers.vue'

export default {
  components: {
    projectTime: ProjectTime,
    projectCategory: ProjectCategory,
    projectMembers: ProjectMembers
  },
  data: function () {
    return {
      currentView: 'projectCategory',
      act: [
        {active: true, view: 'projectCategory'},
        {active: false, view: 'projectTime'}
      ],
      pro: [
        {active: true, view: 'projectCategory'},
        {active: false, view: 'projectMembers'},
        {active: false, view: 'projectCategory'},
        {active: false, view: 'projectCategory'},
        {active: false, view: 'projectCategory'}
      ]
    }
  },
  props: {
    initTitle: String
  },
  computed: {
    sortHide: function () {
      return this.pro[1].active || this.pro[2].active || this.pro[3].active || this.pro[4].active
    }
  },
  methods: {
    toggleActive: function (data) {
      const act = this.act
      for (var i = 0; i < act.length; i++) {
        act[i].active = false
      }
      act[data].active = true
      this.pro[0].view = act[data].view
      this.pro[2].view = act[data].view
      this.pro[3].view = act[data].view
      this.pro[4].view = act[data].view
      this.currentView = act[data].view
    },
    popup: function (data) {
      this.$emit('popup', data)
    },
    changePage: function (data) {
      const pro = this.pro
      for (var i = 0; i < pro.length; i++) {
        pro[i].active = false
      }
      pro[data].active = true
      this.currentView = pro[data].view
    },
    changeTaskTitle: function (data) {
      this.$emit('tasktitle', data)
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.project {
  padding-top: 20px;
  h1, .sort {
    margin-left: 40px;
  }
  h1 {
    @include pageH1;
  }
  .sort {
    color: $gray1;
    line-height: 40px;
    .hide {
      display: none;
    }
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
        .st1 {
          fill: none;
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
  .content {
    background-color: $gray3;
    height: calc(100vh - 137px);
  }
}
</style>
