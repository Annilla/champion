<template lang='pug'>
nav.nav(:class="{ close: navClose }")
  .navWrap
    .nBtn(@click='toggleNav')
      .line.top
      .line.middle
      .line.bottom
    .team
      md-list.btns
        md-button.btn
          md-list-item
            md-layout
              md-layout
                .icon
                  img(src='../../assets/img/iconkingston.jpg')
              md-layout(md-flex="75").txt Kingston
    .mainList
      md-list.btns
        md-button.btn.myTasks(:class="{ active: act[0].active }", @click.native='toggleActive(0)')
          md-list-item
            md-layout
              md-layout
                .icon
                  svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 60 60", xml:space="preserve")
                    path.st0(d="M30,17.3c-7,0-12.8,5.7-12.8,12.8S23,42.8,30,42.8h0c7,0,12.7-5.7,12.7-12.8C42.8,23,37,17.3,30,17.3zM30,39.9c-5.5,0-9.9-4.5-9.9-9.9c0-5.5,4.5-9.9,9.9-9.9c5.5,0,9.9,4.5,9.9,9.9C39.9,35.5,35.5,39.9,30,39.9z")
                    polygon.st0(points="36.6,24.2 28.6,32.3 23.4,27.1 21.4,29 28,35.7 28.6,35.2 28.6,35.2 28.6,35.2 28.6,35.2 29.1,35.7 38.6,26.2   ")
              md-layout(md-flex="75")
                md-layout(md-flex="70")
                  .txt 我的待辦清單
                md-layout(md-flex="30")
                  .num 8
        md-button.btn.projects(:class="{ active: act[1].active, activeInner: checkProject }", @click.native='toggleActive(1)')
          md-list-item
            md-layout
              md-layout
                .icon
                  svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 60 60", xml:space="preserve")
                    path.st0(d="M41.2,27.2c0-1.4-1.2-2.5-2.5-2.4h-2.8v-5H24v5h-2.7c-1.4-0.1-2.5,1.1-2.6,2.5l0,11.6c0,1.4,1.2,2.4,2.5,2.4c0,0,0,0,0.1,0l17.4,0c1.4,0,2.5-1.1,2.6-2.5L41.2,27.2z M26.5,22.3h6.9v2.5h-6.9V22.3z M38.7,38.7l-17.5,0l0-11.5c0,0,0,0,0,0c0,0,0,0,0,0l0,0l2.7,0v0h11.9v0l2.8,0L38.7,38.7z")
              md-layout(md-flex="75").txt 專案
        md-button.btn.project(:class="{ active: act[2].active }", @click.native='toggleActive(2)')
          md-list-item
            md-layout
              md-layout
                .icon
              md-layout(md-flex="75")
                md-layout(md-flex="70")
                  .txt 創新產品
                md-layout(md-flex="30")
                  .num 6
        md-button.btn.project(:class="{ active: act[3].active }", @click.native='toggleActive(3)')
          md-list-item
            md-layout
              md-layout
                .icon
              md-layout(md-flex="75")
                md-layout(md-flex="70")
                  .txt 海外拓展
                md-layout(md-flex="30")
                  .num 2
        md-button.btn.project(:class="{ active: act[4].active }", @click.native='toggleActive(4)')
          md-list-item
            md-layout
              md-layout
                .icon
              md-layout(md-flex="75")
                md-layout(md-flex="70")
                  .txt 資金募集
                md-layout(md-flex="30")
                  .num 1
        md-button.btn.project(:class="{ active: act[5].active }", @click.native='toggleActive(5)')
          md-list-item
            md-layout
              md-layout
                .icon
              md-layout(md-flex="75")
                md-layout(md-flex="70")
                  .txt 產學合作
                md-layout(md-flex="30")
                  .num 1
    .info
      md-list.btns
        md-button.btn.me
          md-list-item
            md-layout
              md-layout
                .icon
                  img(src='../../assets/img/ann.jpg')
              md-layout(md-flex="75").txt Ann Cheng
        md-button.btn.about
          md-list-item
            md-layout
              md-layout
                .icon
                  svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 60 60", xml:space="preserve")
                    path.st0(d="M38.3,19.1c0-0.1,0-0.2,0-0.3v-1.3H21.7v1.3c0,0.1,0,0.2,0,0.3h-4.2v1.3c0,8.8,6.4,11.2,7.7,11.6c0.7,0.8,1.3,1.4,1.9,1.9c1.2,1.1,1.6,1.5,1.6,2.5v2c-1,0.1-1.9,0.7-2.4,1.5l-1.3,0c-1.1,0.1-1.9,1-1.9,2.1l0,0.5h13.6l0-0.5c0.1-1.1-0.8-2.1-1.9-2.1h-1.3c-0.6-0.8-1.5-1.4-2.4-1.5v-2c0-1,0.4-1.5,1.6-2.5l-0.3-0.4l0.3,0.4c0.6-0.5,1.2-1.1,1.9-1.9c1.4-0.4,7.7-2.8,7.7-11.6v-1.3H38.3zM40,21.7c-0.3,3.1-1.6,5-3,6.2c0.5-1.6,1-3.6,1.1-6.2H40z M31.3,31.8c-0.5,0.4-0.9,0.8-1.3,1.3c-0.4-0.5-0.8-0.9-1.3-1.3c-1.8-1.6-4.3-3.7-4.5-11.7h11.7C35.6,28.1,33.1,30.3,31.3,31.8z M23,27.8c-1.3-1.2-2.7-3.1-3-6.1h1.9C22,24.3,22.4,26.2,23,27.8z")
              md-layout(md-flex="75").txt 關於 Champion
</template>

<script>
export default {
  data: function () {
    return {
      navClose: true,
      act: [
        { active: true },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false }
      ]
    }
  },
  computed: {
    checkProject: function () {
      const act = this.act
      for (var i = 2; i < act.length; i++) {
        if (act[i].active === true) {
          return true
        }
      }
    }
  },
  methods: {
    toggleNav: function () {
      this.navClose = !this.navClose
    },
    toggleActive: function (data) {
      const act = this.act
      for (var i = 0; i < act.length; i++) {
        act[i].active = false
      }
      act[data].active = true
      this.navClose = true
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/variables.scss';

.nav {
  width: 325px;
  height: 100vh;
  background-color: $accent;
  color: $white;
  position: fixed;
  z-index: 1;
  top: 0;
  transition: all .5s;
  overflow: hidden;
  .navWrap {
    position: relative;
    height: 100vh;
  }
  .nBtn {
    width: 20px;
    padding: 20px;
    cursor: pointer;
    box-sizing: content-box;
    margin-left: calc(100% - 60px);
    transition: all .5s;
    .line {
      width: 20px;
      border-bottom: 2px solid $white;
      margin-bottom: 5px;
      transition: all .5s;
      &.top {
        transform: translateY(7px) rotate(45deg) scaleX(1.4);
      }
      &.middle {
        opacity: 0;
      }
      &.bottom {
        margin-bottom: 0;
        transform: translateY(-7px) rotate(-45deg) scaleX(1.4);
      }
    }
  }
  .md-theme-app.md-list.btns {
    padding: 0;
    background-color: transparent;
    color: $white;
  }
  .btn {
    margin: 0;
    padding: 0;
    height: 60px;
    transition: all .5s;
    .icon {
      width: 60px;
      float: left;
      img {
        width: 40px;
        margin: 10px;
        height: auto;
        display: block;
        border-radius: 20px;
      }
      svg {
        .st0 {
          fill: $white;
          opacity: 0.5;
        }
      }
    }
    .txt {
      line-height: 60px;
    }
    .num {
      width: 50px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      margin: 18px 0;
      border-radius: 15px;
      background-color: $primary;
      color: $white;
    }
    &.active {
      background-color: $primary;
      .icon {
        svg {
          .st0 {
            opacity: 1;
          }
        }
      }
      .num {
        background-color: $white;
        color: $primary;
      }
    }
    &.activeInner {
      background-color: transparent;
    }
  }
  .team, .mainList, .info {
    width: 325px;
  }
  .team {
    transition: all .5s;
    &:after {
      content:'';
      display: block;
      margin: 10px 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .icon {
      img {
        width: 50px;
        margin: 5px;
        border-radius: 25px;
      }
    }
    .txt {
      font-size: 25px;
    }
  }
  .mainList {
    height: calc(100vh - 60px - 71px - 141px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
      border-radius: 2px;
      height: 4px;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
    }
  }
  .info {
    position: absolute;
    bottom: 0;
    &:before {
      content:'';
      display: block;
      margin: 10px 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      transition: all .5s;
    }
  }
  &.close {
    width: 60px;
    .nBtn {
      .line {
        &.top {
        transform: translateY(0) rotate(0) scaleX(1);
        }
        &.middle {
          opacity: 1;
        }
        &.bottom {
          margin-bottom: 0;
          transform: translateY(0) rotate(0) scaleX(1);
        }
      }
    }
    .btn {
      margin-left: -16px;
    }
    .btn {
      &.project {
        display: none;
        background-color: transparent;
      }
      &.activeInner {
        background-color: $primary;
        .icon {
          svg {
            .st0 {
              opacity: 1;
            }
          }
        }
      }
    }
    .team {
      opacity: 0;
      .btn {
        cursor: initial;
      }
    }
    .info {
      &:before {
        opacity: 0;
      }
    }
  }
}
</style>
