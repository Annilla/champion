<template lang='pug'>
section.me
  h1 嗨, Ann Cheng
  .content
    .conWrap
      .col.person
        .title 個人資訊
        .card
          md-layout
            md-layout.head
              img(src='../../assets/img/ann.jpg')
              .icon
                svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 123.3 595.3 595.3", xml:space="preserve")
                  path.st0(d="M122.5,596l30.3-121.2l184.3-184.3l90.9,90.9L243.7,565.7L122.5,596L122.5,596z M173.7,486.7l-19.4,77.6l77.6-19.4l163.4-163.5l-58.1-58.2L173.7,486.7L173.7,486.7z")
                  path.st0(d="M223.5,558.9c-7.8-31.5-32.4-56-63.8-63.8l5.6-22.4c39.7,9.9,70.8,40.9,80.6,80.6L223.5,558.9")
                  path.st0(d="M221.1,513.8l-16.4-16.4L366.2,336l16.4,16.4L221.1,513.8")
                  path.st0(d="M138.4,580.2l36-9c-3.3-13.3-13.7-23.7-27.1-27L138.4,580.2")
                  path.st0(d="M436.5,372.9l-90.9-90.9l36.2-36.2l5.7,0.8c44,5.9,78.5,40.5,84.5,84.5l0.8,5.7L436.5,372.9z M378.3,282.1l58.2,58.2l11.6-11.6c-6.2-29.2-29-52-58.2-58.2C389.9,270.4,378.3,282.1,378.3,282.1z")
            md-layout(md-flex="33")
              .date
                .year From 2016
                .month 12
                .day &nbsp;/ 21
          .input
            md-layout(md-flex="100")
              md-layout.icon(md-flex="10")
                svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 123.3 595.3 595.3", xml:space="preserve")
                  path.st0(d="M527.9,536.1c-37.7-41-88.8-71.8-144.8-87.4c48.9-31.6,78.7-85.9,78.6-144.5c-0.2-45.6-18.1-88.4-50.4-120.6c-32.3-32.2-75.2-49.9-120.7-49.9l-0.8,0c-94.4,0.4-170.9,77.5-170.5,171.9c0.2,45.6,18.1,88.4,50.4,120.6c32.3,32.2,75.2,49.9,120.8,49.9h0c2.1,0,4.2,0,6.3-0.1c0.3,0,0.6,0,0.9,0c126.1,0,240.9,88,253.9,193.3H44.2c9.6-71.2,55.8-133.2,121.8-162.6l0.2-0.1c9.6-4.8,13.5-16.5,8.8-26.2c-3.3-6.7-10.1-10.8-17.6-10.8c-3,0-5.8,0.7-8.5,2c-42.1,19-78,49.4-103.7,87.8C19.6,597.6,5.2,642.3,3.7,688.5l0,19.7h588v-19.5C591.6,635,569,580.8,527.9,536.1z M422.6,305.3C422.4,377.9,363.1,437,290.5,437c-73.1-0.2-132.4-59.8-132.3-132.8c0.3-72.6,59.6-131.7,132.2-131.7l0.5,0c35.3,0.1,68.5,14,93.4,39.1C409.2,236.7,422.8,270,422.6,305.3z")
              md-layout 暱稱
            md-layout(md-flex="100")
              md-layout.icon(md-flex="10")
              md-layout
                md-input-container
                  md-input(v-model='nickname')
          .input
            md-layout(md-flex="100")
              md-layout.icon(md-flex="10")
                svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 123.3 595.3 595.3", xml:space="preserve")
                  path.st0(d="M535.8,182.8H59.5C26.8,183,0.3,209.6,0.3,242.4L0,599.5c0.1,32.8,26.7,59.4,59.5,59.5h476.2c32.8-0.1,59.4-26.7,59.5-59.5V242.4C595.2,209.5,568.6,182.9,535.8,182.8z M535.8,599.5H59.5V301.9l238.1,148.8l238.1-148.8V599.5zM297.6,391.2L59.5,242.4h476.2L297.6,391.2z")
              md-layout 帳號
            md-layout(md-flex="100")
              md-layout.icon(md-flex="10")
              md-layout
                md-input-container
                  md-input(v-model='email')
      .col.set
        .title 設定
        .card
          md-list.list
            md-list-item
              md-layout.listIcon(md-flex="10")
                img(src='../../assets/img/color.svg')
              md-layout.txt 更換主題色彩
              md-layout(md-align="end")
                .tmp.green
                .tmp.white
                .tmp.blue
            md-list-item
              md-layout.listIcon(md-flex="10")
                img(src='../../assets/img/bell.svg')
              md-layout.txt 設置桌面提醒
              md-layout.status(md-align="end") {{ notifyStatus }}
              md-layout(md-align="end", md-flex="15")
                md-switch.md-primary.notify(v-model="notify", id="notify", name="notify")
            md-button.button
              md-list-item
                md-layout.listIcon(md-flex="10")
                  img(src='../../assets/img/completetask.svg')
                md-layout.txt 查看完成項目
                md-icon keyboard_arrow_right
            md-button.button.logout(@click.native='changePage("login")')
              md-list-item
                md-layout.listIcon(md-flex="10")
                  img(src='../../assets/img/logout.svg')
                md-layout.txt 登出
                md-icon keyboard_arrow_right
</template>

<script>
export default {
  data: function () {
    return {
      nickname: 'Ann Cheng',
      email: 'ann8534621@gmail.com',
      notify: true
    }
  },
  computed: {
    notifyStatus: function () {
      return this.notify ? 'ON' : 'OFF'
    }
  },
  methods: {
    changePage: function (data) {
      this.$emit('nav', '')
      this.$emit('page', data)
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';
.me {
  padding-top: 20px;
  h1 {
    margin-left: 40px;
    @include pageH1;
    margin-bottom: 60px;
  }
  .content {
    background-color: $gray3;
    padding: 0 40px;
    padding-top: 40px;
    height: calc(100vh - 137px);
    .conWrap {
      height: calc(100% - 20px);
      width: 100%;
      overflow: auto;
      @include scrollBar;
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    .col {
      float: left;
      margin-right: 50px;
      margin-bottom: 20px;
      .title {
        @include pageH2;
      }
      .card {
        width: 420px;
        background-color: $white;
        border-radius: 5px;
      }
      &.person {
        .card {
          padding: 50px 30px;
          .head {
            position: relative;
            margin-bottom: 30px;
            img {
              width: 150px;
              height: 150px;
              border-radius: 75px;
            }
            .icon {
              width: 35px;
              height: 35px;
              border-radius: 18px;
              background-color: $primary;
              position: absolute;
              left: 120px;
              bottom: 0;
              cursor: pointer;
              svg {
                .st0 {
                  fill: $white;
                }
              }
            }
          }
          .date {
            .year {
              font-size: 18px;
              font-weight: bold;
              color: $warn;
              margin-bottom: 20px;
            }
            .month {
              font-size: 45px;
              color: $gray1;
              display: inline-block;
            }
            .day {
              font-size: 21px;
              color: $gray1;
              display: inline-block;
              transform: translateY(-19px);
            }
          }
          .input {
            color: $primary;
            margin-bottom: 10px;
            .icon {
              svg {
                width: 18px;
                height: 18px;
                display: block;
                .st0 {
                  fill: $primary;
                }
              }
            }
          }
        }
      }
      &.set {
        .list {
          padding: 0;
        }
        .listIcon {
          padding: 25px 0;
          img {
            width: 20px;
            height: 20px;
          }
        }
        .tmp {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          background-repeat: no-repeat;
          background-size: 40px;
          background-position: center;
          &.green {
            background-color: $primary;
            background-image: url('../../assets/img/tmp.svg');
          }
          &.white {
            background-color: $white;
            border: 1px solid $gray1;
          }
          &.blue {
            background-color: #00AFCB;
          }
        }
        .status {
          color: $primary;
        }
        .notify {
          .md-switch-thumb {
            background-color: $primary;
          }
        }
        .button {
          padding: 0;
          margin: 0;
        }
        .logout {
          color: $warn;
        }
      }
    }
  }
}
</style>
