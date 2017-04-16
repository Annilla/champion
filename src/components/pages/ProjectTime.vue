<template lang='pug'>
.projectTime
  .taskWrap
    .col
      .group 今天
      .addTask
        span +
      ul.tasks
        li(v-for="(col, index) in col1", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Today
            .head
              img(:src='"https://placeimg.com/35/35/people?"+(index*10+1)')
    .col
      .group 明天
      .addTask
        span +
      ul.tasks
        li(v-for="(col, index) in col2", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Tomorrow
            .head
              img(:src='"https://placeimg.com/35/35/people?"+(index*3+1)')
    .col
      .group 近期
      .addTask
        span +
      ul.tasks
        li(v-for="(col, index) in col3", @click='openComments(col.name)')
          .title {{ col.name }}
            .complete
              svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 30 30", xml:space="preserve")
                path.st0(d="M12.7,21.2L5,13.5l1.2-1.2l6.5,6.5L22.7,8.8l1.2,1.2L12.7,21.2")
          .time Dec {{ index*7+1 }}
            .head
              img(:src='"https://placeimg.com/35/35/people?"+(index*7+2)')
</template>

<script>
export default {
  data: function () {
    return {
      col1: [
        { name: '準備研討會事宜' },
        { name: '整理會議筆記' }
      ],
      col2: [
        { name: '找相關產品資料' },
        { name: '分析需求' },
        { name: '討論伺服器架構' }
      ],
      col3: [
        { name: '製作員工大會簡報' },
        { name: '採購設備' },
        { name: '備份檔案' },
        { name: '通知合作廠商' }
      ]
    }
  },
  methods: {
    openComments: function (taskTitle) {
      this.$emit('popup', 'comments')
      this.$emit('tasktitle', taskTitle)
    }
  }
}
</script>

<style lang='scss'>
@import '../../assets/scss/base.scss';

.projectTime {
  height: 100%;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  .taskWrap {
    padding: 40px 0 40px 40px;
    width: 150%;
    height: 100%;
    .col {
      float: left;
      margin-right: 40px;
      height: 100%;
      overflow: hidden;
      .group {
        @include pageH2;
        &.addCol {
          color: $primary;
          cursor: pointer;
          text-decoration: underline;
          transition: .5s;
          &:hover {
            color: $gray1;
          }
        }
      }
      .addTask {
        width: 340px;
        background-color: $white;
        border-radius: 5px;
        padding: 20px 30px;
        cursor: pointer;
        transition: .5s;
        border-bottom: 1px solid $gray3;
        span {
          display: block;
          text-align: center;
          font-size: 30px;
          color: $primary;
          transition: .5s;
        }
        &:hover {
          box-shadow: 0 3px 6px $accent_30;
          span {
            transform: rotate(180deg);
            color: $gray1;
          }
        }
      }
      ul.tasks {
        height: calc(100% - 54px - 64px);
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        @include scrollBar;
        &::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
        }
        li {
          list-style: none;
          display: block;
          width: 340px;
          background-color: $white;
          border-radius: 5px;
          padding: 20px 30px;
          cursor: pointer;
          transition: all .5s;
          overflow: hidden;
          margin-top: 10px;
          .title {
            margin-bottom: 20px;
            .complete {
              width: 30px;
              height: 30px;
              float: right;
              border: 1px solid $primary;
              border-radius: 15px;
              box-sizing: border-box;
              cursor: pointer;
              background-color: $primary;
              transform-origin: 50% 50%;
              transform: translateX(30px);
              opacity: 0;
              transition: all .5s;
              svg {
                display: block;
                transform-origin: 50% 50%;
                transform: rotate(360deg);
                transition: all .5s;
                .st0 {
                  fill: $white;
                }
              }
              &:hover {
                background-color: $white;
                svg {
                  .st0 {
                    fill: $primary;
                  }
                }
              }
            }
          }
          .time {
            color: $gray1;
            .head {
              float: right;
              img {
                width: 35px;
                height: 35px;
                border-radius: 18px;
              }
            }
          }
        }
        li:hover {
          box-shadow: 0 3px 6px $accent_30;
          .title {
            .complete {
              transform: translateX(0);
              opacity: 1;
              svg {
                transform: rotate(0);
              }
            }
          }
        }
      }
    }
  }
}
</style>
